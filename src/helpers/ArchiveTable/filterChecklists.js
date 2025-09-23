import moment from 'moment';

export const filterChecklists = (checklists, filters) => {
  return checklists.filter(item => {
    const time = `${item.startTimeAutoHh || ''}${item.startTimeAutoMm || ''}`;

    const matches = {
      filterChecklist: String(item.identifier || '')
        .toLowerCase()
        .includes(String(filters.filterChecklist || '').toLowerCase()),
      filterPointOfCase: String(item.pointOfCase || '')
        .toLowerCase()
        .includes(String(filters.filterPointOfCase || '').toLowerCase()),
      filterBrigadeSMP: String(item.application_number || '')
        .toLowerCase()
        .includes(String(filters.filterBrigadeSMP || '').toLowerCase()),
      filterPatientINN: String(item.patientINN || '')
        .toLowerCase()
        .includes(String(filters.filterPatientINN || '').toLowerCase()),
      filterPatientFIO: String(item.patientFullName || '')
        .toLowerCase()
        .includes(String(filters.filterPatientFIO || '').toLowerCase()),
      filterHospital: String(item.numberHospital || '')
        .toLowerCase()
        .includes(String(filters.filterHospital || '').toLowerCase()),
      filterEmployeeID: String(item.employeeID || '')
        .toLowerCase()
        .includes(String(filters.filterEmployeeID || '').toLowerCase()),
      filterStatusChecklist: String(item.checkStatus || '')
        .toLowerCase()
        .includes(String(filters.filterStatusChecklist || '').toLowerCase()),
      filterDateStartChecklist: item.identifier
        ? moment(new Date(+item.identifier))
            .format('DD.MM.YYYY')
            .includes(String(filters.filterDateStartChecklist || ''))
        : false,
      filterTimeStartChecklist: time.includes(
        String(filters.filterTimeStartChecklist || '')
      ),
      filterDurationOfHospitalization: String(
        item.timeStartToEndHospitality || ''
      )
        .toLowerCase()
        .includes(
          String(filters.filterDurationOfHospitalization || '').toLowerCase()
        ),
    };

    return Object.values(matches).every(Boolean);
  });
};
