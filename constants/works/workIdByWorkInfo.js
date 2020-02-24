const { works } = require('./worksIds');
const { CHORNOVA_WORK ,CHISTOVA_WORK } = require('./type');
const { WALL, CEILING, FLOOR } = require('./workLocations');

// тимчасова ціна матеріалів
const materialPrice = [300, 500, 800];

module.exports = {
  allWorks: [
    {
      id: works.GRUNTOVKA_POD_STYAZHKU,
      includesText: 'Грунтовка под стяжку',
      type: CHORNOVA_WORK,
      target: [WALL],
      info: '',
      materialPrice,
    },
    {
      id: works.CEMENTNO_PESCHANAYA_STYAZHKA,
      includesText: 'Цементно-песчаная стяжка до 4 см',
      type: CHORNOVA_WORK,
      target: [FLOOR],
      info: '',
      materialPrice,
    },
    {
      id: works.GRUNTOVKA_STEN_POTOLKA,
      includesText: 'Грунтовка стен, потолка (1 слой)',
      type: CHORNOVA_WORK,
      target: [WALL, CEILING],
      info: '',
      materialPrice,
    },
    {
      id: works.PODGOTOVKA_BETONNOGO_POTOLKA,
      includesText: 'Подготовка бетонного потолка под покраску или обои',
      type: CHORNOVA_WORK,
      target: [CEILING],
      info: '',
      materialPrice,
    },
    {
      id: works.PODGOTOVKA_BETONNOJ_STENY,
      includesText: 'Подготовка бетонной стены под покраску или обои',
      type: CHORNOVA_WORK,
      target: [WALL],
      info: '',
      materialPrice,
    },
    {
      id: works.GRUNTOVKA_STYAZHKI_POD_PLITKU,
      includesText: 'Грунтовка стяжки под плитку',
      type: CHORNOVA_WORK,
      target: [FLOOR],
      info: '',
      materialPrice,
    },
    {
      id: works.UKLADKA_PLITKI_NA_POL,
      includesText: 'Укладка плитки на пол',
      type: CHISTOVA_WORK,
      target: [FLOOR],
      info: '',
      materialPrice,
    },
    {
      id: works.UKLADKA_PLITKI_NA_STENYI,
      includesText: 'Укладка плитки на стены',
      type: CHISTOVA_WORK,
      target: [WALL],
      info: '',
      materialPrice,
    },
    {
      id: works.POKLEYKA_OBOEV_NA_STENU,
      includesText: 'Поклейка обоев на стену',
      type: CHISTOVA_WORK,
      target: [WALL],
      info: '',
      materialPrice,
    },
    {
      id: works.UKLADKA_LAMINATA,
      includesText: 'Укладка ламината',
      type: CHISTOVA_WORK,
      target: [FLOOR],
      info: '',
      materialPrice,
    },
    {
      id: works.UKLADKA_PARKETNOY_DOSKI_NA_POL,
      includesText: 'Укладка паркетной доски на пол',
      type: CHISTOVA_WORK,
      target: [FLOOR],
      info: '',
      materialPrice,
    },
    {
      id: works.UKLADKA_TREHSLOYNOY_PARKETNOY_DOSKI_NA_POL,
      includesText: 'Укладка трехслойной паркетной доски на пол',
      type: CHISTOVA_WORK,
      target: [FLOOR],
      info: '',
      materialPrice,
    },
    {
      id: works.POKRASKA_STEN_VODOEMULSIONNOY_KRASKOY,
      includesText: 'Покраска стен водоэмульсионной краской',
      type: CHISTOVA_WORK,
      target: [WALL],
      info: '',
      materialPrice,
    },
    {
      id: works.POKRASKA_POTOLKA_VODOEMULSIONNOY_KRASKOY,
      includesText: 'Покраска потолка водоэмульсионной краской',
      type: CHISTOVA_WORK,
      target: [CEILING],
      info: '',
      materialPrice,
    },
    {
      id: works.MONTAZH_NATYAZHNYIH_POTOLKOV,
      includesText: 'Монтаж натяжных потолков',
      type: CHISTOVA_WORK,
      target: [CEILING],
      info: '',
      materialPrice,
    },
  ]
};
