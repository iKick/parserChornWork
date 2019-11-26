const fetch = require('node-fetch');
const cheerio = require('cheerio');
const _ = require('lodash');
const fs = require('fs');

const idsToUrls = require('../constants/ourIdToThey');

const getPrice = (text) => {
  return text.split('грн')[0].replace(/\D/g,'')
};

const index = async () => {

  const chornovaWork = {};

  for (const id of Object.keys(idsToUrls)) {
      const html = await fetch(idsToUrls[id]).then(res => res.text());
      const $ = cheerio.load(html);

      const workPriceByRegion = {};
    $('.pricelist li').each((i, elem) =>{

      const params = [
        {includesText: 'Грунтовка под стяжку цены', workKey: 'gruntovkaPodStyazhku'},
        {includesText: 'Цементно-песчаная стяжка до 4 см', workKey: 'cementnoPeschanayaStyazhka'},
        {includesText: 'Грунтовка стен, потолка', workKey: 'gruntovkaStenPotolka'},
        {includesText: 'Подготовка бетонного потолка под покраску или обои', workKey: 'podgotovkaBetonnogoPotolka'},
        {includesText: 'Подготовка бетонной стены под покраску или обои', workKey: 'podgotovkaBetonnojSteny'},
      ];

      const text = $(elem).text();
      params.forEach(({ includesText, workKey }) => {
        if(text.includes(includesText)) {
          workPriceByRegion[workKey] = getPrice(text);
        }
      });

    });
      // console.log(workPriceByRegion);
      chornovaWork[id] = workPriceByRegion;
  }

  fs.writeFileSync('test.json', JSON.stringify(chornovaWork), 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

  // console.log(chornovaWork);
};

index();
