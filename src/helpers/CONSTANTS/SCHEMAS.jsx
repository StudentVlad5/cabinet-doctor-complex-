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
  alergoCod: [
    {
      group: 'Личные данные пациента',
      fields: [
        { field: 'patientFullName', label: 'ФИО пациента' },
        { field: 'patientINN', label: 'ИИН пациента' },
        { field: 'patientSex', label: 'Пол пациента' },
        { field: 'birthdayDate', label: 'Дата рождения' },
        { field: 'comments', label: 'Дополнительный комментарий' },
      ],
    },
    {
      group: 'Информация о вызове',
      fields: [
        'nameOfParamedic',
        'numberOfBrigade',
        {
          field: 'startOfSimptoms',
          label: 'Время начала симптомов',
          type: 'datetimeRange', // спец. тип
          parts: ['startTimeOfSimptomsHh', 'startTimeOfSimptomsMm'],
          check: 'startTimeOfSimptoms', // ключ для проверки
        },
        {
          field: 'timeOfCalling',
          label: 'Время поступления вызова',
          type: 'datetimeRange', // спец. тип
          parts: ['timeOfCallingHh', 'timeOfCallingMm'],
          check: 'timeOfCallingBrigade', // ключ для проверки
        },
        {
          field: 'timeOfArriving',
          label: 'Время прибытия на место',
          type: 'datetimeRange', // спец. тип
          parts: ['timeOfArrivingHh', 'timeOfArrivingMm'],
          check: 'timeOfArrivingBrigade', // ключ для проверки
        },
        {
          field: 'dateOfReview',
          label: 'Дата и время осмотра',
          type: 'datetimeRange', // спец. тип
          parts: ['timeOfReviewHh', 'timeOfReviewMm', 'dateOfReview'],
          check: 'dateOfReviewBrigade', // ключ для проверки
        },

        {
          field: 'nameOfParamedic',
          label: 'ФИО фельдшера',
        },
        {
          field: 'numberOfBrigade',
          label: 'Номер бригады / ПМСП',
        },
      ],
    },
    {
      group: 'Информация о состоянии пациента',
      fields: [
        {
          field: 'sign',
          label: 'Признак',
        },
        { field: 'rash', label: 'Сыпь / крапивница' },
        {
          field: 'swelling',
          label: 'Отёк лица / языка / гортани',
        },
        {
          field: 'shortnessOfBreath',
          label: 'Затруднение дыхания, хрипы, стридор',
        },
        {
          field: 'tachypnea',
          label: 'Одышка, тахипноэ',
        },
        {
          field: 'painInTheStomach',
          label: 'Тошнота / рвота / боль в животе',
        },
        {
          field: 'pressureReduction',
          label: 'Снижение давления / обморок',
        },
        {
          field: 'passOff',
          label: 'Потеря сознания',
        },
        {
          field: 'convulsions',
          label: 'Судороги',
        },
        {
          field: 'cyanosis',
          label: 'Цианоз (губ, конечностей)',
        },
      ],
    },
    {
      group: 'Витальные показатели',
      fields: [
        {
          field: 'ad',
          label: 'Артериальное давление, мм. рт. ст',
          type: 'checkRange', // спец. тип
          min: 110,
          max: 180,
        },
        {
          field: 'pulse',
          label: 'Пульс, уд в 1 минуту',
          type: 'checkRange', // спец. тип
          min: 50,
          max: 100,
        },
        {
          field: 'breathingRate',
          label: 'Частота дыхания, в мин',
          type: 'checkRange', // спец. тип
          min: 0,
          max: 120,
        },
        {
          field: 'saturation',
          label: 'Сатурация SpO₂, % (с O₂ / без)',
        },
        {
          field: 'temperature',
          label: 'Температура тела, °C',
          type: 'checkRange', // спец. тип
          min: 35.9,
          max: 37.3,
        },
        {
          field: 'glucoseLevel',
          label: 'Уровень глюкозы (при наличии глюкометра), ммоль/л',
        },
      ],
    },
    {
      group: 'Предполагаемый аллерген',
      fields: [
        {
          field: 'isMedicin',
          label: 'Лекарственный препарат',
        },
        {
          field: 'isFoodProduct',
          label: 'Пищевой продукт',
        },
        {
          field: 'isStingInsect',
          label: 'Укус / ужаление насекомого',
        },
        {
          field: 'isAllergen',
          label: 'Контактный аллерген (косметика, латекс и др.)',
        },
        {
          field: 'isNotEstablished',
          label: 'Неустановленный аллерген',
        },
        {
          field: 'medicin',
          label: 'Наименование лекарственного препарата',
        },
        {
          field: 'foodProduct',
          label: 'Наименование пищевого продукта',
        },
        {
          field: 'stingInsect',
          label: 'Комментарий по аллергену укуса насекомого',
        },
        {
          field: 'allergen',
          label: 'Наименование контактного аллергена',
        },
        {
          field: 'notEstablished',
          label: 'Комментарий по неустановленному аллергену',
        },
      ],
    },
    {
      group: 'Проведённая терапия',
      fields: [
        {
          field: 'isAdrenaline',
          label: 'Адреналин 0,1% в/м',
        },
        {
          field: 'isDexamethasone',
          label: 'Преднизолон / Дексаметазон',
        },
        {
          field: 'isSuprastin',
          label: 'Супрастин / Димедрол',
        },
        {
          field: 'isSolutions',
          label: 'Растворы (NaCl)',
        },
        {
          field: 'isInhalation',
          label: 'Ингаляции (сальбутамол и др.)',
        },
        {
          field: 'isOtherapy',
          label: 'О₂-терапия',
        },
        {
          field: 'adrenaline',
          label: 'Комментарий Адреналин 0,1% в/м',
        },
        {
          field: 'dexamethasone',
          label: 'Комментарий Преднизолон / Дексаметазон',
        },
        {
          field: 'suprastin',
          label: 'Комментарий Супрастин / Димедрол',
        },
        {
          field: 'solutions',
          label: 'Комментарий Растворы (NaCl)',
        },
        {
          field: 'inhalation',
          label: 'Комментарий Ингаляции (сальбутамол и др.)',
        },
        {
          field: 'otherapy',
          label: 'О₂-терапия',
        },
      ],
    },
    {
      group: 'Дополнительные данные',
      fields: [
        {
          field: 'isCatheter',
          label: 'Катетеризация периферической вены',
        },
        {
          field: 'isEkg',
          label: 'ЭКГ',
        },
        {
          field: 'isTrachealIntubation',
          label: 'Трахеальная интубация',
        },
        {
          field: 'isCardiopulmonaryResuscitation',
          label: 'Сердечно-лёгочная реанимация',
        },
      ],
    },
    {
      group: 'Оценка после терапии',
      fields: [
        {
          field: 'adBefore',
          label: 'Артериальное давление, мм. рт. ст (до терапии)',
        },
        {
          field: 'adAfter',
          label: 'Артериальное давление, мм. рт. ст (после терапии)',
        },
        {
          field: 'pulseBefore',
          label: 'Пульс, уд в мин (до терапии)',
        },
        {
          field: 'pulseAfter',
          label: 'Пульс, уд в мин (после терапии)',
        },
        {
          field: 'saturationBefore',
          label: 'атурация SpO₂, % (с O₂ / без - до терапии)',
        },
        {
          field: 'saturationAfter',
          label: 'Сатурация SpO₂, % (с O₂ / без - после терапии)',
        },
        {
          field: 'compliencesBefore',
          label: 'Жалобы (до терапии)',
        },
        {
          field: 'compliencesAfter',
          label: 'Жалобы (после терапии)',
        },
        {
          field: 'consciousnessBefore',
          label: 'Сознание (до терапии)',
        },
        {
          field: 'consciousnessAfter',
          label: 'Сознание (после терапии)',
        },
      ],
    },
  ],
  polyOfTrauma: [
    {
      group: 'Личные данные пациента',
      fields: [
        { field: 'patientFullName', label: 'ФИО пациента' },
        { field: 'patientINN', label: 'ИИН пациента' },
        { field: 'patientSex', label: 'Пол пациента' },
        { field: 'birthdayDate', label: 'Дата рождения' },
        { field: 'comments', label: 'Дополнительный комментарий' },
      ],
    },
    {
      group: 'Информация о вызове',
      fields: [
        {
          field: 'clearConsciousness',
          label: 'Ясный уровень сознания',
        },
        {
          field: 'coma',
          label: 'Кома',
        },
        {
          field: 'stupor',
          label: 'Оглушение',
        },
        {
          field: 'sopor',
          label: 'Сопор',
        },

        {
          field: 'ad',
          label: 'Артериальное давление, мм. рт. ст',
        },
        {
          field: 'pulse',
          label: 'Пульс, уд в мин',
        },
        {
          field: 'saturation',
          label: 'Сатурация SpO₂',
        },
      ],
    },
    {
      group: 'Информация о состоянии пациента',
      fields: [
        {
          field: 'localizationOfWound',
          label: 'Локализация ранения',
        },
        {
          field: 'bloodLossCheck',
          label: 'Подтверждение кровопотери',
        },
        { field: 'bloodLoss', label: 'Кровопотеря, мл' },
        {
          field: 'symptomOfPaleSpot',
          label: 'Симптом бледного пятна',
        },
        {
          field: 'wound',
          label: 'Открытая рана / закрытая рана',
        },
      ],
    },
    {
      group: 'Проведённая терапия',
      fields: [
        {
          field: 'anesthesia',
          label: 'Обезболивание',
        },
        {
          field: 'instalOfPeripheralCatheter',
          label: 'Установка периферического катетера',
        },
        {
          field: 'infusion',
          label: 'Инфузия',
        },
        {
          field: 'timeOfAppOfTourniquetPoly',
          label: 'Наложение жгута',
          type: 'datetimeRange', // спец. тип
          parts: ['timeOfAppOfTourniquetPolyMm', 'timeOfAppOfTourniquetPolyHh'],
          check: 'timeOfAppOfTourniquet', // ключ для проверки
        },
        {
          field: 'pressureBandage',
          label: 'Давящая повязка',
        },
      ],
    },
  ],
  burns: [
    {
      group: 'Личные данные пациента',
      fields: [
        { field: 'patientFullName', label: 'ФИО пациента' },
        { field: 'patientINN', label: 'ИИН пациента' },
        { field: 'patientSex', label: 'Пол пациента' },
        { field: 'birthdayDate', label: 'Дата рождения' },
        { field: 'comments', label: 'Дополнительный комментарий' },
      ],
    },
    {
      group: 'Витальные показатели',
      fields: [
        {
          field: 'isClearConsciousness',
          label: 'Ясный уровень сознания',
        },
        {
          field: 'isComa',
          label: 'Кома',
        },
        {
          field: 'isStunning',
          label: 'Оглушение',
        },
        {
          field: 'isSopor',
          label: 'Сопор',
        },

        {
          field: 'isThermalBurn',
          label: 'Термический ожог',
        },
        {
          field: 'isChemicalBurn',
          label: 'Химический ожог',
        },
        {
          field: 'isInhalationBurn',
          label: 'Ингаляционный ожог',
        },
        {
          field: 'isElectricBurn',
          label: 'Электрический ожог',
        },
        {
          field: 'ad',
          label: 'Артериальное давление, мм. рт. ст',
        },
        {
          field: 'pulse',
          label: 'Пульс, уд в мин',
        },
        {
          field: 'saturation',
          label: 'Сатурация SpO₂',
        },
      ],
    },
    {
      group: 'Информация о состоянии пациента',
      fields: [
        {
          field: 'symptomPaleSpots',
          label: 'Симптом бледного пятна',
        },
        {
          field: 'localizationOfPlaces',
          label: 'Локализация мест ожога',
        },
        { field: 'selectedZonesCyrillic', label: 'Площадь поражения' },
      ],
    },
    {
      group: 'Проведённая терапия',
      fields: [
        {
          field: 'analgesia',
          label: 'Обезболивание',
        },
        {
          field: 'pressureBandage',
          label: 'Давящая повязка',
        },
        {
          field: 'catheter',
          label: 'Установка периферического катетера',
        },
        {
          field: 'tourniquet',
          label: 'Наложение жгута',
          type: 'datetimeRange', // спец. тип
          parts: ['tourniquetHh', 'tourniquetMm'],
          check: 'timeOfTourniquet', // ключ для проверки
        },
        {
          field: 'infusion',
          label: 'Инфузия',
        },
      ],
    },
  ],
  pregnancy: [
    {
      group: 'Личные данные пациента',
      fields: [
        { field: 'patientFullName', label: 'ФИО пациента' },
        { field: 'patientINN', label: 'ИИН пациента' },
        { field: 'patientSex', label: 'Пол пациента' },
        { field: 'birthdayDate', label: 'Дата рождения' },
        { field: 'comments', label: 'Дополнительный комментарий' },
      ],
    },
    {
      group: 'Паритет',
      fields: [
        {
          field: 'paritet',
          label: 'Вид беременности',
        },
        {
          field: 'application',
          label: 'Обращение',
        },
      ],
    },
    {
      group: 'Действия медицинского персонала',
      fields: [
        {
          field: 'ad',
          label: 'Артериальное давление',
        },
        {
          field: 'headPain',
          label: 'Головная боль',
        },
        { field: 'breakVision', label: 'Нарушение зрения' },
        {
          field: 'painEpigastricRegion',
          label: 'Боль в эпигастральной области',
        },
        {
          field: 'vomiting',
          label: 'Боль в правой верхней части живота, тошнота, рвота',
        },
        {
          field: 'tremor',
          label: 'Подергивание мышц или тремор',
        },
        { field: 'oliguria', label: 'Олигурия' },
        { field: 'catheterizationOfVein', label: 'Катетеризация вены' },
        {
          field: 'bladderCatheterization',
          label: 'Катетеризация мочевого пузыря',
        },
        { field: 'amnioticFluid', label: 'Околоплодные воды' },
        { field: 'blood', label: 'Кровь' },
        { field: 'other', label: 'Другое' },
        { field: 'noteToOther', label: 'Примечание к пункту Другое' },
      ],
    },
    {
      group: 'Профилактика судорог',
      fields: [
        {
          field: 'startingDose',
          label:
            'Стартовая доза: 5 г сухого вещества (20 мл 25% р-ра) в/в медленно в течении 10-20 минут',
        },
        {
          field: 'maintenanceDose',
          label:
            'Поддерживающая доза: 1-2 г в час сухого вещества сульфата магния при помощи шприца-дозатора (со скоростью 4-8 мл/час)',
        },
      ],
    },
    {
      group: 'Гипотензивное лечение',
      fields: [
        {
          field: 'firstNifedipineInjection',
          label:
            'нифедипин 10 мг - первая инъекция (если АД ≥160/110 мм рт.ст- нифедипин 10 мг каждые 20 минут)',
        },
        {
          field: 'secondNifedipineInjection',
          label:
            'нифедипин 10 мг - вторая инъекция (если АД ≥160/110 мм рт.ст- нифедипин 10 мг каждые 20 минут)',
        },
      ],
    },
    {
      group: 'Оценка состояния плода',
      fields: [
        {
          field: 'movementFetus',
          label: 'Шевеление плода',
        },
      ],
    },
  ],
  knifeWounds: [
    {
      group: 'Личные данные пациента',
      fields: [
        { field: 'patientFullName', label: 'ФИО пациента' },
        { field: 'patientINN', label: 'ИИН пациента' },
        { field: 'patientSex', label: 'Пол пациента' },
        { field: 'birthdayDate', label: 'Дата рождения' },
        { field: 'comments', label: 'Дополнительный комментарий' },
      ],
    },
    {
      group: 'Информация о вызове',
      fields: [
        {
          field: 'clearConsciousness',
          label: 'Ясный уровень сознания',
        },
        {
          field: 'coma',
          label: 'Кома',
        },
        {
          field: 'stupor',
          label: 'Оглушение',
        },
        {
          field: 'sopor',
          label: 'Сопор',
        },

        {
          field: 'ad',
          label: 'Артериальное давление, мм. рт. ст',
        },
        {
          field: 'pulse',
          label: 'Пульс, уд в мин',
        },
        {
          field: 'saturation',
          label: 'Сатурация SpO₂',
        },
      ],
    },
    {
      group: 'Информация о состоянии пациента',
      fields: [
        {
          field: 'localizationOfWound',
          label: 'Локализация ранения',
        },
        { field: 'bloodLoss', label: 'Кровопотеря, мл' },
        {
          field: 'symptomOfPaleSpot',
          label: 'Симптом бледного пятна',
        },
      ],
    },
    {
      group: 'Проведённая терапия',
      fields: [
        {
          field: 'anesthesia',
          label: 'Обезболивание',
        },
        {
          field: 'instalOfPeripheralCatheter',
          label: 'Установка периферического катетера',
        },
        {
          field: 'infusion',
          label: 'Инфузия',
        },
        {
          field: 'timeOfAppOfTourniquetKnife',
          label: 'Наложение жгута',
          type: 'datetimeRange', // спец. тип
          parts: [
            'timeOfAppOfTourniquetKnifeHh',
            'timeOfAppOfTourniquetKnifeMm',
          ],
          check: 'timeOfAppOfTourniquetKnife', // ключ для проверки
        },
        {
          field: 'pressureBandage',
          label: 'Давящая повязка',
        },
      ],
    },
  ],
  codeCardio: [
    {
      group: 'Личные данные пациента',
      fields: [
        { field: 'patientFullName', label: 'ФИО пациента' },
        { field: 'patientINN', label: 'ИИН пациента' },
        { field: 'patientSex', label: 'Пол пациента' },
        { field: 'birthdayDate', label: 'Дата рождения' },
        { field: 'comments', label: 'Дополнительный комментарий' },
      ],
    },
    {
      group: 'Клиническая картина',
      fields: [
        {
          field: 'isChestPain',
          label: 'Боль в груди',
        },
        {
          field: 'natureChestPain',
          label: 'Характер боли',
        },
        {
          field: 'localizationChestPain',
          label: 'Локализация боли',
        },
        {
          field: 'irradiationChestPain',
          label: 'Иррадиация',
        },

        {
          field: 'durationChestPain',
          label: 'Длительность',
        },
        {
          field: 'isShortnessBreath',
          label: 'Одышка',
        },
        {
          field: 'isWeakness',
          label: 'Потливость, слабость',
        },
        {
          field: 'isNausea',
          label: 'Тошнота / рвота',
        },
        {
          field: 'isLossOfConsciousness',
          label: 'Потеря сознания / головокружение',
        },
        {
          field: 'clinicalPictureOther',
          label: 'Другое',
        },
      ],
    },
    {
      group: 'Физикальный осмотр',
      fields: [
        {
          field: 'firstMedicalContact',
          label: 'Первый медицинский контакт',
          type: 'datetimeRange', // спец. тип
          parts: ['firstMedicalContactHh', 'firstMedicalContactMm'],
          check: 'firstMedicalContact', // ключ для проверки
        },
        {
          field: 'adLeftHand',
          label: 'Артериальное давление, мм. рт. ст (левая рука)',
        },
        {
          field: 'adRightHand',
          label: 'Артериальное давление, мм. рт. ст (праввая рука)',
        },
        {
          field: 'pulse',
          label: 'Пульс, уд в мин',
        },
        {
          field: 'pubreathingRatese',
          label: 'Частота дыхания в мин',
        },
        {
          field: 'rhythm',
          label: 'Ритм',
        },
        {
          field: 'deficit',
          label: 'Дефицит, разница между ЧСС и пульсом',
        },
        {
          field: 'chdd',
          label: 'ЧДД',
        },
        {
          field: 'satO',
          label: 'SatO₂ (SpO₂)',
        },
        {
          field: 'isSignsOfHF_edema',
          label: 'Признаки СН отеки',
        },
        {
          field: 'isSignsOfHF_wheezing',
          label: 'Признаки СН хрипы',
        },
        {
          field: 'physicalExaminationOther',
          label: 'Другое',
        },
      ],
    },
    {
      group: 'ЭКГ (до 10 минут от контакта!)',
      fields: [
        {
          field: 'isECCarriedOut',
          label: 'Проведена ЭКГ (12 отведений)',
        },
        {
          field: 'isElevation',
          label: 'Есть элевация ST ≥ 2 мм',
        },
        {
          field: 'isDepression',
          label: 'Есть депрессия ST, инверсия T',
        },
        {
          field: 'isFibrillation',
          label: 'Признаки фибрилляции',
        },
        {
          field: 'isBlockade',
          label: 'Признаки блокады',
        },
        {
          field: 'ecgOther',
          label: 'Дополнительный комментарий по ЭКГ',
        },
      ],
    },
    {
      group: 'Догоспитальное лечение (по протоколу ОКС)',
      fields: [
        {
          field: 'isNitroglycerin',
          label: 'Изокет спрей (АД не ниже 90/60мм рт ст)',
        },
        {
          field: 'isMorphine',
          label: 'Морфин при болевом синдроме',
        },
        {
          field: 'isASK',
          label: 'АСК 300 мг разжевать',
        },
        {
          field: 'isClopidogrel',
          label: 'Тривентин 180 мг',
        },
        {
          field: 'isHeparin',
          label: 'Гепарин 5000 / Эноксапарин',
        },
        {
          field: 'isTLT',
          label: 'ТЛТ',
        },
        {
          field: 'startTLTDate',
          label: 'ТЛТ - дата начала',
        },
        {
          field: 'finishTLTDate',
          label: 'ТЛТ - дата окончания',
        },
        {
          field: 'prehospitalTreatmentOther',
          label: 'Дополнительный комментарий',
        },
      ],
    },
    {
      group: 'Передача пациента',
      fields: [
        {
          field: 'timeOfBuginOfSymptoms',
          label: 'Время начала симптомов',
          type: 'datetimeRange', // спец. тип
          parts: ['timeOfBuginOfSymptomsHh', 'timeOfBuginOfSymptomsMm'],
          check: 'timeOfBuginOfSymptom', // ключ для проверки
        },
        {
          field: 'timeOfHospitaTransferl',
          label: 'Время передачи в больницу',
          type: 'datetimeRange', // спец. тип
          parts: ['timeOfHospitaTransferlHh', 'timeOfHospitaTransferlMm'],
          check: 'timeOfHospitaTransfer', // ключ для проверки
        },
        {
          field: 'isVenousAccess',
          label: 'Венозный доступ (в/в катетер установлен)',
        },
        {
          field: 'adLeftHandOfHospitaTransfer',
          label: 'Артериальное давление, мм. рт. ст (левая рука)',
        },
        {
          field: 'adRightHandOfHospitaTransfer',
          label: 'Артериальное давление, мм. рт. ст (правая рука)',
        },
        {
          field: 'pulseOfHospitaTransfer',
          label: 'Пульс уд в мин',
        },
        {
          field: 'breathingRateOfHospitaTransfer',
          label: 'Частота дыхания в мин',
        },
        {
          field: 'rhythmOfHospitaTransfer',
          label: 'Ритм',
        },
        {
          field: 'deficitOfHospitaTransfer',
          label: 'Дефицит, разница между ЧСС и пульсом',
        },
        {
          field: 'chddOfHospitaTransfer',
          label: 'ЧДД',
        },
        {
          field: 'satOOfHospitaTransfer',
          label: 'Сатурация SatO₂ (SpO₂)',
        },
        {
          field: 'isSignsOfHF_wheezingOfHospitaTransfer',
          label: 'Признаки СН отеки',
        },
        {
          field: 'physicalExaminationOtherOfHospitaTransfer',
          label: 'Другое',
        },
      ],
    },
  ],
  gastrointestinalBleeding: [
    {
      group: 'Личные данные пациента',
      fields: [
        { field: 'patientFullName', label: 'ФИО пациента' },
        { field: 'patientINN', label: 'ИИН пациента' },
        { field: 'patientSex', label: 'Пол пациента' },
        { field: 'birthdayDate', label: 'Дата рождения' },
        { field: 'comments', label: 'Дополнительный комментарий' },
      ],
    },
    {
      group: 'Состояние пациента',
      fields: [
        {
          field: 'clearConsciousness',
          label: 'Ясный уровень сознания',
        },
        {
          field: 'coma',
          label: 'Кома',
        },
        {
          field: 'stupor',
          label: 'Оглушение',
        },
        {
          field: 'sopor',
          label: 'Сопор',
        },

        {
          field: 'ad',
          label: 'Артериальное давление, мм. рт. ст',
        },
        {
          field: 'pulse',
          label: 'Пульс уд в мин',
        },
        {
          field: 'saturation',
          label: 'Сатурация SpO₂',
        },
      ],
    },
    {
      group: 'Физикальный осмотр',
      fields: [
        {
          field: 'symptomOfPaleSpot',
          label: 'Симптом бледного пятна',
        },
        {
          field: 'Локализация желудочно – кишечного кровотечения',
          label: 'Артериальное давление, мм. рт. ст (праввая рука)',
        },
        {
          field: 'vomitingBlood',
          label: 'Рвота с кровью',
        },
        {
          field: 'stoolWithBlood',
          label: 'Стул с кровью',
        },
        {
          field: 'colorOfBlood',
          label: 'Цвет крови',
        },
        {
          field: 'bloodLoss',
          label: 'Кровопотеря, мл',
        },
      ],
    },
    {
      group: 'Догоспитальное лечение',
      fields: [
        {
          field: 'timeOfAppOfTourniquetGastro',
          label: 'Время наложения жгута',
          type: 'datetimeRange', // спец. тип
          parts: [
            'timeOfAppOfTourniquetGastroHh',
            'timeOfAppOfTourniquetGastroMm',
          ],
          check: 'timeOfAppOfTourniquetGastroCheck', // ключ для проверки
        },
        {
          field: 'anesthesia',
          label: 'Обезболивание',
        },
        {
          field: 'instalOfPeripheralCatheter',
          label: 'Установка периферического катетера',
        },
        {
          field: 'infusion',
          label: 'Инфузия',
        },
        {
          field: 'pressureBandage',
          label: 'Давящая повязка',
        },
      ],
    },
  ],
};
