const puppeteer = require('puppeteer');

const url = 'https://orteil.dashnet.org/cookieclicker/';

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto(url, {waitUntil: ['load', 'networkidle2']});
  await page.evaluate(() => {Game.cookies=Infinity;return;});
  await page.screenshot({path: 'my_infinity_dream.png'});
})();

