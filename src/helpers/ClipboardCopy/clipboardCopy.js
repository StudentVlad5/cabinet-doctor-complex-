import moment from 'moment';

export const handleCopy = (formData, schema) => {
  if (!formData) return;

  // Заголовок
  let html = `
    <div>
      <h2>Чек-лист №${formData?.identifier || ''}</h2>
      <p>
        Дата: ${moment(new Date(+formData?.identifier))
          .zone('+06:00')
          .format('DD/MM/YYYY')}<br/>
        Бригада №${formData?.application_number || ''}<br/>
        Предполагаемое время прибытия в больницу: ${
          formData?.deliveryTimeHh || '--'
        }:${formData?.deliveryTimeMm || '--'}<br/>
        Номер телефона: ${formData?.numberPhone || ''}<br/>
      </p>
    </div>
  `;

  // основные секции
  schema?.forEach(section => {
    html += `<h3>${section.group}</h3>`;
    html += `<table border="1" cellspacing="0" cellpadding="4" style="border-collapse:collapse; width:100%; margin-bottom:16px;">`;
    html += `<thead><tr><th style="text-align:left;">Поле</th><th style="text-align:left;">Значение</th><th style="text-align:left;">Дефект</th></tr></thead><tbody>`;

    section.fields.forEach(field => {
      let value = '-';

      // обработка типов данных
      if (field.type === 'checkRange') {
        const v = formData?.[field.field];
        value =
          v === 'true' ? 'Да' : v === 'false' ? 'Нет' : v ? v : 'Нет данных';
      } else if (field.type === 'textNumber') {
        value = `${formData?.[field.parts[0]] ?? '--'} - ${
          formData?.[field.parts[1]] ?? '--'
        }`;
      } else if (field.type === 'boolean') {
        value = formData?.[field.field]?.toString() === 'true' ? 'Да' : '-';
      } else if (field.type === 'datetimeRange') {
        const hh = formData?.[field.parts[0]];
        const mm = formData?.[field.parts[1]];
        const date = formData?.[field.parts[2]];

        // години та хвилини
        const timeStr = `${hh ?? '--'}:${mm ?? '--'}`;

        // дата
        let dateStr = '--';
        if (
          date &&
          moment(date, ['YYYY-MM-DD', moment.ISO_8601], true).isValid()
        ) {
          dateStr = moment(date).format('DD-MM-YYYY');
        }

        value = `${timeStr} / ${dateStr}`;
      } else {
        const v = formData?.[field.field];
        value =
          v === 'true' ? 'Да' : v === 'false' ? 'Нет' : v ? v : 'Нет данных';
      }

      // перевірка дефекту
      const defect = formData[`${field.field}_defect`] || false;

      html += `
        <tr>
          <td>${field.label || field.field}</td>
          <td style="${
            defect ? 'background:#ED2939; color:white;' : ''
          }">${value}</td>
          <td style="text-align:center;">${defect ? '❌' : ''}</td>
        </tr>
      `;
    });

    html += `</tbody></table>`;
  });

  // Дополнительные данные
  if (formData?.additionalInfo) {
    html += `<h3>Дополнительная информация</h3><p>${formData.additionalInfo}</p>`;
  }

  // Копируем как HTML
  const listener = e => {
    e.preventDefault();
    e.clipboardData.setData('text/html', html);
    e.clipboardData.setData('text/plain', html.replace(/<[^>]+>/g, '')); // fallback
  };

  document.addEventListener('copy', listener);
  document.execCommand('copy');
  document.removeEventListener('copy', listener);
};
