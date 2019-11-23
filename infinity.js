const puppeteer = require('puppeteer');

const url = 'https://orteil.dashnet.org/cookieclicker/';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--window-size=960,720'],
  });
  const page = await browser.newPage();
  await page.setViewport({width: 960, height: 720});
  let i = 0;
  page.on('requestfinished', async req => {
    if (++i === 60) {
      await page.evaluate(() => {Game.cookies=Infinity;return;});
    }
  });
  await page.goto(url, {waitUntil: ['load', 'networkidle2']});
})();

