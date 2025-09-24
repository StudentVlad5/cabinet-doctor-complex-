import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import {
  AdditionalInfoBox,
  AdditionalInfoDataBox,
  AdditionalInfoDataLableBox,
  AdditionalInfoDataLable,
  AdditionalInfoDataLable2,
  AdditionalInfoDataInput,
  AdditionalInfoDataInput2,
  AdditionalInfoForm,
  AdditionalInfoFormInput,
  AdditionalInfoFormLable,
  AdditionalInfoFormText,
  PatientBoxTitle,
  StylesCheckBoxItem,
  CheckBoxItem,
  CheckIcon,
  DivForLabelDateTime,
  AdditionalInfoBtnBox,
  AdditionalInfoBtn,
  DecisionBox,
  DecisionBoxLabel,
  DecisionBoxInput,
  DecisionBoxTextareaLabel,
  DecisionBoxTextarea,
} from '../CheckListDetails.styled';

import { useStyles } from 'helpers/useStyles/UseStyles';

export const AdditionalInfoFormSection = ({
  formState,
  setFormState,
  handleSubmit,
}) => {
  const classes = useStyles();

  const updateField = (name, value) =>
    setFormState(prev => ({ ...prev, [name]: value }));

  return (
    <AdditionalInfoBox>
      <PatientBoxTitle>
        Дополнительная информация от медицинского центра
      </PatientBoxTitle>

      <AdditionalInfoForm>
        {/* Поликлиника */}
        <AdditionalInfoFormLable>
          <AdditionalInfoFormText>
            Поликлиника прикрепления пациента
          </AdditionalInfoFormText>
          <AdditionalInfoFormInput
            type="text"
            value={formState.inputDataNumberHospital}
            onChange={e =>
              updateField('inputDataNumberHospital', e.target.value)
            }
          />
        </AdditionalInfoFormLable>

        {/* Дата и время */}
        {[
          {
            label: 'прибытия пациента',
            time: 'patientArrivalTime',
            date: 'patientArrivalDate',
            defect: 'patientArrival_defect',
          },
          {
            label: 'КТ',
            time: 'timeDateCt',
            date: null,
            defect: 'timeDateCt_defect',
          },
          {
            label: 'ТЛТ',
            time: 'tltTimeDate',
            date: null,
            defect: 'tltTimeDate_defect',
          },
          {
            label: 'госпитализации',
            time: 'inputDataHospitalizationTimeDate',
            date: null,
            defect: 'inputDataHospitalizationTimeDate_defect',
          },
          {
            label: 'ЦАГ и тромбэктомии',
            time: 'cagTimeDate',
            date: null,
            defect: 'cagTimeDate_defect',
          },
        ].map(({ label, time, date, defect }) => (
          <AdditionalInfoDataBox key={time}>
            <AdditionalInfoFormText>
              Дата и время проведения {label}
            </AdditionalInfoFormText>
            <AdditionalInfoDataLableBox>
              {date && (
                <>
                  <AdditionalInfoDataLable>
                    <AdditionalInfoDataInput
                      type="time"
                      value={formState[time]}
                      onChange={e => updateField(time, e.target.value)}
                    />
                  </AdditionalInfoDataLable>
                  <AdditionalInfoDataLable2>
                    <AdditionalInfoDataInput2
                      type="date"
                      value={formState[date]}
                      onChange={e => updateField(date, e.target.value)}
                    />
                  </AdditionalInfoDataLable2>
                </>
              )}
              {!date && (
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="de"
                >
                  <DateTimePicker
                    className={classes.dateTimePicker}
                    label="Введите время и дату"
                    ampm={false}
                    format="DD.MM.YYYY HH:mm"
                    onChange={newValue => updateField(time, newValue)}
                    value={dayjs(formState[time])}
                  />
                </LocalizationProvider>
              )}

              <DivForLabelDateTime>
                <label style={{ position: 'absolute' }}>
                  <CheckBoxItem
                    type="checkbox"
                    id={`${defect}`}
                    name={`${defect}`}
                    value={formState[defect]}
                    onChange={() => updateField(defect, !formState[defect])}
                    checked={formState[defect]}
                  />
                  <StylesCheckBoxItem
                    $props={formState[defect] ? '4px' : '1px'}
                  >
                    <CheckIcon
                      $props={formState[defect] ? '1' : '0.5'}
                      $fill={formState[defect] ? '#ED2939' : 'grey'}
                    />
                  </StylesCheckBoxItem>
                </label>
              </DivForLabelDateTime>
            </AdditionalInfoDataLableBox>
          </AdditionalInfoDataBox>
        ))}

        {/* Заключительное решение */}
        <DecisionBox>
          <PatientBoxTitle>Заключительное решение</PatientBoxTitle>
          <DecisionBoxLabel>
            <AdditionalInfoFormText>
              Госпитализация по месту прибытия пациента
            </AdditionalInfoFormText>
            <DecisionBoxInput
              type="checkbox"
              value="hospitalizationStrokeCenter"
              checked={
                formState.selectedOption === 'hospitalizationStrokeCenter'
              }
              onChange={() =>
                updateField(
                  'selectedOption',
                  formState.selectedOption === 'hospitalizationStrokeCenter'
                    ? ''
                    : 'hospitalizationStrokeCenter'
                )
              }
            />
          </DecisionBoxLabel>
          <DecisionBoxLabel>
            <AdditionalInfoFormText>
              Направление на амбулаторное лечение
            </AdditionalInfoFormText>
            <DecisionBoxInput
              type="checkbox"
              value="outpatientTreatment"
              checked={formState.selectedOption === 'outpatientTreatment'}
              onChange={() =>
                updateField(
                  'selectedOption',
                  formState.selectedOption === 'outpatientTreatment'
                    ? ''
                    : 'outpatientTreatment'
                )
              }
            />
          </DecisionBoxLabel>
          <DecisionBoxLabel>
            <AdditionalInfoFormText>
              Госпитализация в другое отделение
            </AdditionalInfoFormText>
            <AdditionalInfoFormInput
              type="text"
              value={formState.hospitalizationDepartment}
              onChange={e =>
                updateField('hospitalizationDepartment', e.target.value)
              }
            />
          </DecisionBoxLabel>

          <DecisionBoxTextareaLabel>
            <AdditionalInfoFormText style={{ marginBottom: 12 }}>
              Примечание к чек-листу от Медицинского центра
            </AdditionalInfoFormText>
            <DecisionBoxTextarea
              value={formState.noteChecklistStrokeCenter}
              onChange={e =>
                updateField('noteChecklistStrokeCenter', e.target.value)
              }
            />
          </DecisionBoxTextareaLabel>
        </DecisionBox>

        <AdditionalInfoBtnBox>
          <AdditionalInfoBtn type="submit" onClick={handleSubmit}>
            Сохранить чек-лист
          </AdditionalInfoBtn>
        </AdditionalInfoBtnBox>
      </AdditionalInfoForm>
    </AdditionalInfoBox>
  );
};
