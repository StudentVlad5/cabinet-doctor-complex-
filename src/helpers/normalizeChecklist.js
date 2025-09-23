export const normalizeChecklist = item => ({
  identifier: item.identifier || '',
  application_number: item.application_number || '',
  patientINN: item.patientINN || '',
  patientFullName: item.patientFullName || '',
  employeeID: item.employeeID || '',
  checkStatus: item.checkStatus || '',
  numberHospital: item.numberHospital || '',
  startTimeAutoHh: item.startTimeAutoHh || '',
  startTimeAutoMm: item.startTimeAutoMm || '',
  timeStartToEndHospitality: item.timeStartToEndHospitality || '',
  pointOfCase: item.pointOfCase || '',
});
