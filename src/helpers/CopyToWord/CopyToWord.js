import clipboardCopy from 'clipboard-copy';
import moment from 'moment';

export const handleCopy = data => {
  // const patientData = `
  //   Чек-лист №${data?.identifier ? data?.identifier : ''}
  //   от ${
  //     data?.identifier
  //       ? moment(new Date(+data?.identifier))
  //           .zone('+06:00')
  //           .format('DD/MM/YYYY')
  //       : ''
  //   }
  //   Бригада ${data?.application_number ? data?.application_number : ''}
  //   Предполагаемое время прибытия в больницу: ${
  //     data?.deliveryTimeHh ? data?.deliveryTimeHh : ''
  //   }:${data?.deliveryTimeMm ? data?.deliveryTimeMm : ''}
  //   Номер телефона: ${data?.numberPhone ? data?.numberPhone : ''}
  //   Личные данные пациента:
  //     ФИО пациента: ${data?.patientFullName ? data?.patientFullName : ''} ${
  //   patientFullName_defect === true ? '/ Данные неверны' : ''
  // }
  //     ИИН пациента: ${data?.patientINN ? data?.patientINN : ''} ${
  //   patientINN_defect === true ? '/ Данные неверны' : ''
  // }
  //     Пол пациента: ${data?.patientSex ? data?.patientSex : ''} ${
  //   patientSex_defect === true ? '/ Данные неверны' : ''
  // }
  //     Визуальное описание: ${
  //       data?.visualDescription ? data?.visualDescription : ''
  //     } ${visualDescription_defect === true ? '/ Данные неверны' : ''}
  //   Методика BE FAST:
  //     Потеря равновесия:  ${
  //       data?.lossOfBalance && data?.lossOfBalance.toString() === 'true'
  //         ? 'Да'
  //         : 'Нет'
  //     } ${lossOfBalance_defect === true ? '/ Данные неверны' : ''}
  //     Проблемы со зрением, двоение в глазах:${
  //       data?.visionProblems && data?.visionProblems.toString() === 'true'
  //         ? 'Да'
  //         : 'Нет'
  //     } ${visionProblems_defect === true ? '/ Данные неверны' : ''}
  //     Провисание на лице: ${
  //       data?.saggingFace && data?.saggingFace.toString() === 'true'
  //         ? 'Да'
  //         : 'Нет'
  //     } ${saggingFace_defect === true ? '/ Данные неверны' : ''}
  //     Смещение рук: ${
  //       data?.handDisplacement && data?.handDisplacement.toString() === 'true'
  //         ? 'Да'
  //         : 'Нет'
  //     } ${handDisplacement_defect === true ? '/ Данные неверны' : ''}
  //     Нарушения речи: ${
  //       data?.speechDisorders && data?.speechDisorders.toString() === 'true'
  //         ? 'Да'
  //         : 'Нет'
  //     } ${speechDisorders_defect === true ? '/ Данные неверны' : ''}
  //     Время появления первых симптомов: ${data?.firstSymptomsTimeHh}:${
  //   data?.firstSymptomsTimeMm
  // } / ${data?.firstSymptomsDate} ${
  //   firstSymptomsTime_defect === true ? '/ Данные неверны' : ''
  // }
  //   Действия при подозрении на инсульт:
  //     Начата процедура лечения инсульта: ${
  //       data?.beginStrokeTreatment &&
  //       data?.beginStrokeTreatment.toString() === 'true'
  //         ? 'Да'
  //         : 'Нет'
  //     } ${beginStrokeTreatment_defect === true ? '/ Данные неверны' : ''}
  //     Установлен внутривенный доступ: ${
  //       data?.intravenousAccess && data?.intravenousAccess.toString() === 'true'
  //         ? 'Да'
  //         : 'Нет'
  //     } ${intravenousAccess_defect === true ? '/ Данные неверны' : ''}
  //     Пациент принимает антикоагулянты: ${
  //       data?.patientTakingAnticoagulants &&
  //       data?.patientTakingAnticoagulants.toString() === 'true'
  //         ? 'Да'
  //         : 'Нет'
  //     } ${patientTakingAnticoagulants_defect === true ? '/ Данные неверны' : ''}
  //     У пациента снято ЭКГ: ${data?.ecgTakenHH ? data?.ecgTakenHH : ''} : ${
  //   data?.ecgTakenMM ? data?.ecgTakenMM : ''
  // }  ${ecgTaken_defect === true ? '/ Данные неверны' : ''}
  //   Физиологические параметры:
  //     Содержание сахара в крови: ${
  //       data?.bloodSugarLevel ? data?.bloodSugarLevel : ''
  //     } ммоль/л ${bloodSugarLevel_defect === true ? '/ Данные неверны' : ''}
  //     Температура тела: ${
  //       data?.bodyTemperature ? data?.bodyTemperature : ''
  //     } °C ${bodyTemperature_defect === true ? '/ Данные неверны' : ''}
  //     Артериальное давление: ${
  //       data?.arterialPressureS ? data?.arterialPressureS : ''
  //     }/${data?.arterialPressureD ? data?.arterialPressureD : ''} мм. рт. ст. ${
  //   arterialPressure_defect === true ? '/ Данные неверны' : ''
  // }
  //     Масса тела пациента: ${
  //       data?.patientBodyWeight ? data?.patientBodyWeight : ''
  //     } кг ${patientBodyWeight_defect === true ? '/ Данные неверны' : ''}
  //     Возраст пациента: ${data?.patientAge ? data?.patientAge : ''} лет ${
  //   patientAge_defect === true ? '/ Данные неверны' : ''
  // }
  //   Анамнез:
  //     Внутричерепные кровоизлияния: ${
  //       data?.intracranialHemorrhages &&
  //       data?.intracranialHemorrhages.toString() === 'true'
  //         ? 'Да'
  //         : '-'
  //     } ${intracranialHemorrhages_defect === true ? '/ Данные неверны' : ''}
  //     Большие операции или тяжелые травмы за последние 14 суток: ${
  //       data?.majorSurgeriesOrSevereInjuries &&
  //       data?.majorSurgeriesOrSevereInjuries.toString() === 'true'
  //         ? 'Да'
  //         : '-'
  //     } ${
  //   majorSurgeriesOrSevereInjuries_defect === true ? '/ Данные неверны' : ''
  // }
  //     Недавние внутричерепные или интраспинальные хирургические вмешательства: ${
  //       data?.surgicalInterventions &&
  //       data?.surgicalInterventions.toString() === 'true'
  //         ? 'Да'
  //         : '-'
  //     } ${surgicalInterventions_defect === true ? '/ Данные неверны' : ''}
  //     Инфаркт миокарда в предшествующие инсульту 3 месяца: ${
  //       data?.myocardialInfarction &&
  //       data?.myocardialInfarction.toString() === 'true'
  //         ? 'Да'
  //         : '-'
  //     } ${myocardialInfarction_defect === true ? '/ Данные неверны' : ''}
  //     Инсульт в предшествующие инсульту 3 месяца: ${
  //       data?.stroke && data?.stroke.toString() === 'true' ? 'Да' : '-'
  //     } ${stroke_defect === true ? '/ Данные неверны' : ''}
  //     Проведена пункция артерии в сложной для компрессии области в предшествующие инсульту 7 дней: ${
  //       data?.arterialPuncture && data?.arterialPuncture.toString() === 'true'
  //         ? 'Да'
  //         : '-'
  //     } ${arterialPuncture_defect === true ? '/ Данные неверны' : ''}
  //     Малые операции или инвазивные вмешательства в последние 10 дней: ${
  //       data?.smallOperations && data?.smallOperations.toString() === 'true'
  //         ? 'Да'
  //         : '-'
  //     } ${smallOperations_defect === true ? '/ Данные неверны' : ''}
  //     Сердечно-сосудистые заболевания (подострый бактериальный эндокардит, острый перикардит): ${
  //       data?.cardiovascularDiseases &&
  //       data?.cardiovascularDiseases.toString() === 'true'
  //         ? 'Да'
  //         : '-'
  //     } ${cardiovascularDiseases_defect === true ? '/ Данные неверны' : ''}
  //     Острое инфекционное заболевание: ${
  //       data?.acuteInfectiousDisease &&
  //       data?.acuteInfectiousDisease.toString() === 'true'
  //         ? 'Да'
  //         : '-'
  //     } ${acuteInfectiousDisease_defect === true ? '/ Данные неверны' : ''}
  //     Кровоизлияния в ЖКТ и мочевыводящих путях не позднее 21 дня до инсульта: ${
  //       data?.hemorrhagicStroke && data?.hemorrhagicStroke.toString() === 'true'
  //         ? 'Да'
  //         : '-'
  //     } ${hemorrhagicStroke_defect === true ? '/ Данные неверны' : ''}
  //     Судорожные приступы в дебюте заболевания (имеется связь с острой церебральной ишемией): ${
  //       data?.convulsions && data?.convulsions.toString() === 'true'
  //         ? 'Да'
  //         : '-'
  //     } ${convulsions_defect === true ? '/ Данные неверны' : ''}
  //     ОНМК ранее: ${
  //       data?.onmk && data?.onmk.toString() === 'true' ? 'Да' : ''
  //     } ${onmk_defect === true ? '/ Данные неверны' : ''}
  //      Геморрагический : ${
  //        data?.hemorrhages && data?.hemorrhages.toString() === 'true'
  //          ? 'Да'
  //          : '-'
  //      } ${hemorrhages_defect === true ? '/ Данные неверны' : ''}
  //      Субарахноидальное кровоизлияние (САК): ${
  //        data?.SACStroke && data?.SACStroke.toString() === 'true' ? 'Да' : '-'
  //      } ${SACStroke_defect === true ? '/ Данные неверны' : ''}
  //      Ишемический инсульт: ${
  //        data?.ischemicStroke && data?.ischemicStroke.toString() === 'true'
  //          ? 'Да'
  //          : '-'
  //      } ${ischemicStroke_defect === true ? '/ Данные неверны' : ''}
  //      Преходящее нарушение мозгового кровообращения (ПНМК): ${
  //        data?.transient_cerebrovascular_accident &&
  //        data?.transient_cerebrovascular_accident.toString() === 'true'
  //          ? 'Да'
  //          : '-'
  //      } ${
  //   transient_cerebrovascular_accident_defect === true ? '/ Данные неверны' : ''
  // }
  //      Другое: ${
  //        data?.unknown_accident && data?.unknown_accident.toString() === 'true'
  //          ? 'Да'
  //          : '-'
  //      } ${unknown_accident_defect === true ? '/ Данные неверны' : ''}
  //   Данные по заполнителю:
  //     ФИО сотрудника: ${
  //       data?.medicalStaffFullName ? data?.medicalStaffFullName : ''
  //     }
  //     № бригады СМП: №${
  //       data?.application_number ? data?.application_number : ''
  //     }
  //     Заполнение чек-листа начато: ${
  //       data?.startTimeAutoHh ? data?.startTimeAutoHh : ' '
  //     }:${data?.startTimeAutoMm ? data?.startTimeAutoMm : ' '} ${moment(
  //   new Date(+data?.identifier)
  // )
  //   .zone('+06:00')
  //   .format('DD.MM.YYYY')}
  //     Заполнение чек-листа завершено:${
  //       data?.endTimeAutoHh ? data?.endTimeAutoHh : ' '
  //     }:${data?.endTimeAutoMm ? data?.endTimeAutoMm : ' '} ${moment(
  //   new Date(+data?.identifier)
  // )
  //   .zone('+06:00')
  //   .format('DD.MM.YYYY')}
  //     Примечание к чек-листу от СМП: ${data?.noteChecklistSMP || ''}
  //   Дополнительная информация от инсультного центра:
  //     Поликлиника прикрепления пациента: ${data?.numberHospital || ''}
  //     Дата и время прибытия пациента: ${data?.patientArrivalTime || ''}  ${
  //   data?.patientArrivalDate || ''
  // }
  //     Дата и время проведения КТ: ${
  //       data?.timeDateCt
  //         ? moment(new Date(data?.timeDateCt))
  //             .zone('+06:00')
  //             .format('HH:mm DD.MM.YYYY')
  //         : ''
  //     } ${timeDateCt_defect === true ? '/ Данные неверны' : ''}
  //     Дата и время проведения ТЛТ: ${
  //       data?.tltTimeDate
  //         ? moment(new Date(data?.tltTimeDate))
  //             .zone('+06:00')
  //             .format('HH:mm DD.MM.YYYY')
  //         : ''
  //     } ${tltTimeDate_defect === true ? '/ Данные неверны' : ''}
  //     Дата и время госпитализации: ${
  //       data?.inputDataHospitalizationTimeDate
  //         ? moment(new Date(data?.inputDataHospitalizationTimeDate))
  //             .zone('+06:00')
  //             .format('HH:mm DD.MM.YYYY')
  //         : ''
  //     } ${
  //   inputDataHospitalizationTimeDate_defect === true ? '/ Данные неверны' : ''
  // }
  //     Дата и время ЦАГ и тромбэктомия: ${
  //       data?.cagTimeDate
  //         ? moment(new Date(data?.cagTimeDate))
  //             .zone('+06:00')
  //             .format('HH:mm DD.MM.YYYY')
  //         : ''
  //     } ${cagTimeDate_defect === true ? '/ Данные неверны' : ''}
  //     Заключительное решение:
  //      Госпитализация в Инсультный центр: ${
  //        data?.selectedOption === 'hospitalizationStrokeCenter' ? 'Да' : 'Нет'
  //      }
  //      Направление на амбулаторное лечение: ${
  //        data?.selectedOption === 'outpatientTreatment' ? 'Да' : 'Нет'
  //      }
  //      Госпитализация в другое отделение: ${
  //        data?.hospitalizationDepartment || ''
  //      }
  //      Примечание к чек-листу от Инсультного центра:  ${
  //        data?.noteChecklistStrokeCenter_defect || ''
  //      }
  // `;
  // clipboardCopy(patientData);
  // navigator.clipboard.writeText(patientData).then(() => {
  //   setIsCopied(true);
  //   setTimeout(() => setIsCopied(false), 3000);
  // });
};
