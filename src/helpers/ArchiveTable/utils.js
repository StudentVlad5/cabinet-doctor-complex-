export const formatTime = (hh, mm) =>
  hh && mm
    ? `${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}`
    : '';
