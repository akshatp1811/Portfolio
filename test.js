import puppeteer from 'puppeteer';

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: "new"
    });
    const page = await browser.newPage();
    
    // Catch console errors
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.error('Browser ERROR:', msg.text());
      }
    });

    page.on('pageerror', error => {
      console.error('Page ERROR:', error.message);
    });

    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
    
    await browser.close();
  } catch (err) {
    console.error('Puppeteer Script Error:', err);
  }
})();
