import { chromium } from 'playwright-core';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = 'file://' + path.join(__dirname, 'mockups.html');
const outDir = path.join(__dirname, 'exports');

const screens = [
  ['s1', 'fourcast-01-home-live-round'],
  ['s2', 'fourcast-02-captain-dashboard'],
  ['s3', 'fourcast-03-checkin-roster'],
  ['s4', 'fourcast-04-team-draw'],
  ['s5', 'fourcast-05-beagle-standings'],
  ['s6', 'fourcast-06-settlement-share'],
];

const browser = await chromium.launch({
  executablePath: process.env.PW_CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--no-sandbox', '--force-color-profile=srgb'],
});
const page = await browser.newPage({ deviceScaleFactor: 3 });
await page.goto(htmlPath, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(300);

for (const [id, name] of screens) {
  const el = page.locator('#' + id);
  await el.screenshot({ path: path.join(outDir, name + '.png'), omitBackground: true });
  console.log('rendered', name);
}

await browser.close();
console.log('done');
