// cхема для данных анкеты

export const SCHEMAS = {
  stroke: [
    {
      group: 'Личные данные пациента',
      fields: [
        { field: 'patientFullName', label: 'ФИО пациента' },
        { field: 'patientINN', label: 'ИИН пациента' },
        { field: 'patientSex', label: 'Пол пациента' },
        { field: 'birthdayDate', label: 'Дата рождения' },
        {
          field: 'visualDescription',
          label: 'Визуальное описание - при отсутствии личных данных',
        },
        { field: 'comments', label: 'Дополнительный комментарий' },
      ],
    },
    {
      group: 'Методика BE FAST',
      fields: [
        { field: 'lossOfBalance', label: 'Потеря равновесия' },
        {
          field: 'visionProblems',
          label: 'Проблемы со зрением, двоение в глазах',
        },
        {
          field: 'saggingFace',
          label: 'Провисание на лице',
        },
        {
          field: 'handDisplacement',
          label: 'Смещение рук',
        },
        {
          field: 'speechDisorders',
          label: 'Нарушения речи',
        },
        {
          field: 'firstSymptoms',
          label: 'Время появления первых симптомов',
          type: 'datetimeRange', // спец. тип
          parts: [
            'firstSymptomsTimeHh',
            'firstSymptomsTimeMm',
            'firstSymptomsDate',
          ],
          check: 'firstSymptomsTime', // ключ для проверки
        },
      ],
    },
    {
      group: 'Действия при подозрении на инсульт',
      fields: [
        {
          field: 'beginStrokeTreatment',
          label: 'Начата процедура лечения инсульта',
        },
        { field: 'intravenousAccess', label: 'Установлен внутривенный доступ' },
        {
          field: 'patientTakingAnticoagulants',
          label: 'Пациент принимает антикоагулянты',
        },
        {
          field: 'ecgTakenHH',
          label: 'У пациента снято ЭКГ',
        },
      ],
    },
    {
      group: 'Физиологические параметры',
      fields: [
        {
          field: 'bloodSugarLevel',
          label: 'Содержание сахара в крови, ммоль/л',
          type: 'checkRange', // спец. тип
          min: 2.7,
          max: 22,
        },
        {
          field: 'bodyTemperature',
          label: 'Температура тела, °C',
          type: 'checkRange', // спец. тип
          min: 35.9,
          max: 37.3,
        },
        {
          field: 'arterialPressure',
          label: 'Артериальное давление (САД-ДАД), мм. рт. ст.',
          type: 'textNumber', // спец. тип
          parts: ['arterialPressureS', 'arterialPressureD'],
          check: 'arterialPressureLevel', // ключ для проверки
          min: 110,
          max: 180,
        },
        {
          field: 'patientBodyWeight',
          label: 'Масса тела пациента, кг',
        },
        {
          field: 'patientAge',
          label: 'Возраст пациента, лет',
          type: 'checkRange', // спец. тип
          min: 17,
          max: 80,
        },
      ],
    },
    {
      group: 'Анамнез',
      fields: [
        {
          field: 'intracranialHemorrhages',
          label: 'Внутричерепные кровоизлияния',
        },
        {
          field: 'majorSurgeriesOrSevereInjuries',
          label: 'Большие операции или тяжелые травмы за последние 14 суток',
        },
        {
          field: 'surgicalInterventions',
          label:
            'Недавние внутричерепные или интраспинальные хирургические  вмешательства',
        },
        {
          field: 'myocardialInfarction',
          label: 'Инфаркт миокарда в предшествующие инсульту 3 месяца',
        },
        {
          field: 'stroke',
          label: 'Инсульт в предшествующие инсульту 3 месяца',
        },
        {
          field: 'arterialPuncture',
          label:
            'Проведена пункция артерии в сложной для компрессии области в  предшествующие инсульту 7 дней',
        },
        {
          field: 'smallOperations',
          label:
            'Малые операции или инвазивные вмешательства в последние 10        дней',
        },
        {
          field: 'cardiovascularDiseases',
          label:
            'Сердечно-сосудистые заболевания (подострый бактериальный      эндокардит, острый перикардит)',
        },
        {
          field: 'acuteInfectiousDisease',
          label: 'Острое инфекционное заболевание',
        },
        {
          field: 'hemorrhagicStroke',
          label:
            'Кровоизлияния в ЖКТ и мочевыводящих путях не позднее 21 дня до инсульта',
        },
        {
          field: 'convulsions',
          label:
            'Судорожные приступы в дебюте заболевания (имеется связь с острой церебральной ишемией)',
        },
        {
          field: 'onmk',
          label: 'ОНМК ранее',
        },
        {
          field: 'hemorrhages',
          label: 'Геморрагический',
        },
        {
          field: 'SACStroke',
          label: 'Субарахноидальное кровоизлияние (САК)',
        },
        {
          field: 'ischemicStroke',
          label: 'Ишемический инсульт',
        },
        {
          field: 'transient_cerebrovascular_accident',
          label: 'Преходящее нарушение мозгового кровообращения (ПНМК)',
        },
        {
          field: 'unknown_accident',
          label: 'Другое',
        },
        {
          field: 'noteChecklistSMP',
          label: 'Примечание к чек-листу от СМП',
        },
      ],
    },
  ],
};
