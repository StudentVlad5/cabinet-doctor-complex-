import { theme } from 'components/baseStyles/Variables.styled';
import {
  CheckBoxItem,
  CheckIcon,
  StylesCheckBoxItem,
  TdCheckCorrectItem,
  TdSmallRed,
  Tr,
} from './CheckListDetails.styled';
import moment from 'moment';

export const renderRow = (
  { field, label, indent, type = 'text', parts, min, max },
  data,
  formData,
  updateField,
  checkData
) => {
  let displayValue = '-';
  let statusColor = theme.colors.darkGrey;

  // checkRange
  if (type === 'checkRange') {
    const value = data?.[field];
    displayValue =
      value === 'true'
        ? 'Да'
        : value === 'false'
        ? 'Нет'
        : value
        ? value
        : 'Нет данных';
    statusColor =
      +value < min || +value > max
        ? theme.colors.accentCoral
        : theme.colors.darkGrey;
  }
  // text / number
  if (type === 'text' || type === 'number') {
    const value = data?.[field];
    displayValue =
      value === 'true' || value === 'да'
        ? 'Да'
        : value === 'false'
        ? 'Нет'
        : value
        ? value
        : 'Нет данных';
    statusColor =
      displayValue === 'Да' ? theme.colors.accentCoral : theme.colors.darkGrey;
  }
  // textNumber
  if (type === 'textNumber') {
    const value = `${data?.[parts[0]]} - ${data?.[parts[1]]}`;
    displayValue = value ?? 'Нет данных';
    statusColor =
      +data?.[parts[0]] < min || data?.[parts[1]] > max
        ? theme.colors.accentCoral
        : theme.colors.darkGrey;
  }

  // boolean
  if (type === 'boolean') {
    const value = data?.[field]?.toString() === 'true';
    displayValue = value ? 'Да' : '-';
    statusColor = value ? theme.colors.accentCoral : theme.colors.darkGrey;
  }

  // datetimeRange
  if (type === 'datetimeRange') {
    const hh = data?.[parts[0]];
    const mm = data?.[parts[1]];
    const date = data?.[parts[2]];
    if (hh || mm || date) {
      displayValue = `${hh ?? '--'}:${mm ?? '--'} / ${
        moment(date).format('DD-MM-YYYY') ?? '--'
      }`;
    } else {
      displayValue = 'Нет данных';
    }

    // проверка разницы в часах
    if (date && hh != null && mm != null) {
      const today = moment();
      const firstSymptomDate = moment(
        `${date} ${hh}:${mm}`,
        'YYYY-MM-DD HH:mm'
      );
      const hoursDifference = today.diff(firstSymptomDate, 'hours');

      if (hoursDifference >= checkData.firstSymptomsTimeMax) {
        displayValue += '  (Более 72ч)';
        statusColor = theme.colors.accentCoral;
      } else if (hoursDifference >= checkData.firstSymptomsTimeMin) {
        displayValue += '  (Более 4,5ч)';
        statusColor = theme.colors.darkGrey;
      }
    }
  }

  const defect = formData[`${field}_defect`] || false;

  return (
    <Tr key={field}>
      <TdSmallRed
        $props={statusColor}
        style={indent ? { paddingLeft: indent } : {}}
      >
        {label}
      </TdSmallRed>
      <TdSmallRed $props={statusColor}>{displayValue}</TdSmallRed>
      <TdCheckCorrectItem>
        <label>
          <CheckBoxItem
            type="checkbox"
            id={`${field}_defect`}
            checked={defect}
            onChange={() => updateField(`${field}_defect`, !defect)}
          />
          <StylesCheckBoxItem $props={defect ? '4px' : '1px'}>
            <CheckIcon
              $props={defect ? '1' : '0.5'}
              $fill={defect ? '#ED2939' : 'grey'}
            />
          </StylesCheckBoxItem>
        </label>
      </TdCheckCorrectItem>
    </Tr>
  );
};
