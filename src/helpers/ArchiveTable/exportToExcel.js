import { utils as XLSXUtils, writeFile as writeXLSX } from 'xlsx';
import moment from 'moment';

export const exportToExcel = checklists => {
  const dataForExcel = checklists.map(c => ({
    'Чек-лист': c.identifier,
    Обращение: c.pointOfCase,
    '№ Бригады СМП': c.application_number,
    'ИИН пациента': c.patientINN,
    'ФИО пациента': c.patientFullName,
    'Поликлиника прикрепления': c.numberHospital,
    'Идентификатор сотрудника': c.employeeID,
    'Статус чек-листа': c.checkStatus,
    'Дата Чек-листа': moment(new Date(+c.identifier)).format('DD.MM.YYYY'),
    'Время начала чек-листа': `${c.startTimeAutoHh}:${c.startTimeAutoMm}`,
    'Время до госпитализации': c.timeStartToEndHospitality || '',
  }));

  const ws = XLSXUtils.json_to_sheet(dataForExcel);
  const wb = XLSXUtils.book_new();
  XLSXUtils.book_append_sheet(wb, ws, 'Чек-листы');
  writeXLSX(wb, 'Чек-листы.xlsx');
};
