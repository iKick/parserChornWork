const fetch = require('node-fetch');
const cheerio = require('cheerio');
const _ = require('lodash');
const fs = require('fs');

const idsToUrls = require('../constants/ourIdToThey');
const { allWorks } = require('../constants/works/workIdByWorkInfo');

const getPrice = (text) => {
  return Number(text.split('грн')[0].replace(/\D/g,''));
};

const index = async () => {

  const worksBackend = {};

  for (const id of Object.keys(idsToUrls)) {
      const html = await fetch(idsToUrls[id]).then(res => res.text());
      const $ = cheerio.load(html);
      const works = [];
      const worksWasPars = [];
    $('.pricelist li').each((i, elem) =>{
      const text = $(elem).text();

      allWorks.forEach(({ id, includesText, type, target, info, materialPrice }) => {
        if(text.includes(includesText) && !worksWasPars.includes(includesText)) {
          worksWasPars.push(includesText);
          works.push({
            id,
            name: includesText,
            price: getPrice(text),
            type,
            target,
            info,
            materialPrice,
          });
        }
      });

    });
      // console.log(workPriceByRegion);
    worksBackend[id] = works;
  }

  fs.writeFileSync('worksBackend.json', JSON.stringify(worksBackend), 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

  // console.log(chornovaWork);
};

index();
