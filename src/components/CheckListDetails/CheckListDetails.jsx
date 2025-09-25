import { useEffect, useMemo, useState } from 'react';
import { fetchData } from 'services/APIservice';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'helpers/Loader/Loader';
import { Container } from 'components/baseStyles/CommonStyle.styled';
import {
  BackContainer,
  BackLink,
  CheckListBox,
  CheckListBtn,
  CheckListBtnBox,
  CheckListText,
  CheckListTextBack,
  CopyIcon,
  PatientBox,
  PatientBoxTitle,
  Table,
  Triangle,
  WordIcon,
} from './CheckListDetails.styled';

import { useParams } from 'react-router-dom';
import moment from 'moment';
import { export2Docx } from 'services/exportToWord';

import 'dayjs/locale/de';

import { handleCopy } from 'helpers/ClipboardCopy/clipboardCopy';

import { renderRow } from './RenderRow';
import { SCHEMAS } from 'helpers/CONSTANTS/SCHEMAS';
import { AdditionalInfoFormSection } from './AdditionalInfo/AdditionalInfoBox';

export const CheckListDetails = () => {
  const [isCopied, setIsCopied] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const routerParams = useParams();
  const id = routerParams.id;

  const [formData, setFormData] = useState({});
  const [data, setData] = useState({});
  const [caseType, setCaseType] = useState('');

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`read?identifier=${id}`);
        if (!data) return onFetchError('Whoops, something went wrong');

        setFormData({ ...data.normal });
        setData({ ...data.normal });
        setCaseType(data.normal.pointOfRouter || 'stroke');
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  const updateField = (name, value) =>
    setFormData(prev => ({ ...prev, [name]: value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        identifier: id,
        ...formData,
      });

      const res = await fetchData(`edit?${params.toString()}`);
      if (!res) return onFetchError('Whoops, something went wrong');
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  let schema = useMemo(() => {
    return SCHEMAS[caseType] || [];
  }, [caseType]);

  return (
    <Container>
      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError('Whoops, something went wrong')}
      <div id="exportContent">
        <CheckListBox>
          <div>
            <BackContainer>
              <BackLink to="#" onClick={() => window.history.back()}>
                <Triangle />
                <CheckListTextBack>Назад</CheckListTextBack>
              </BackLink>
            </BackContainer>
            {formData?.time}
            <CheckListText>
              Чек-лист №{formData?.identifier} <br />
              от{' '}
              {moment(new Date(+formData?.identifier))
                .zone('+06:00')
                .format('DD/MM/YYYY')}
              <br />
              Бригада №{formData?.application_number}
              <br />
              <span style={{ marginRight: '10px' }}>
                Предполагаемое время прибытия в больницу
              </span>
              {formData?.deliveryTimeHh}:{formData?.deliveryTimeMm} <br />
              Номер телефона: {formData?.numberPhone}
            </CheckListText>
          </div>

          <CheckListBtnBox>
            <CheckListBtn
              type="button"
              onClick={() => {
                handleCopy(formData, schema);
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
              }}
            >
              <CopyIcon />
              {isCopied ? 'Скопировано!' : 'Скопировать данные'}
            </CheckListBtn>
            <CheckListBtn
              type="button"
              onClick={() =>
                export2Docx('exportContent', formData?.patientFullName)
              }
            >
              <WordIcon /> Скачать в word
            </CheckListBtn>
          </CheckListBtnBox>
        </CheckListBox>

        {schema.map(section => (
          <PatientBox key={section.group}>
            <PatientBoxTitle>{section.group}</PatientBoxTitle>
            <Table>
              <tbody>
                {section.fields.map(item =>
                  renderRow(item, data, formData, updateField)
                )}
              </tbody>
            </Table>
          </PatientBox>
        ))}
        <AdditionalInfoFormSection
          data={data}
          formState={formData}
          setFormState={setFormData}
          handleSubmit={handleSubmit}
        />
      </div>
    </Container>
  );
};
