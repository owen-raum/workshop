const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  
  // Desktop screenshots
  const desktopPage = await context.newPage();
  await desktopPage.setViewportSize({ width: 1920, height: 1080 });
  await desktopPage.goto('https://workshop.pond.owen.cy');
  
  // Wait for page to load + animations
  await desktopPage.waitForTimeout(5000);
  
  // Scroll through page to trigger lazy loading
  await desktopPage.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await desktopPage.waitForTimeout(2000);
  await desktopPage.evaluate(() => window.scrollTo(0, 0));
  await desktopPage.waitForTimeout(1000);
  
  // Full page screenshot
  await desktopPage.screenshot({ 
    path: '/tmp/workshop-desktop-full.png', 
    fullPage: true 
  });
  
  // Mobile screenshots
  const mobilePage = await context.newPage();
  await mobilePage.setViewportSize({ width: 375, height: 812 });
  await mobilePage.goto('https://workshop.pond.owen.cy');
  
  await mobilePage.waitForTimeout(5000);
  await mobilePage.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await mobilePage.waitForTimeout(2000);
  await mobilePage.evaluate(() => window.scrollTo(0, 0));
  await mobilePage.waitForTimeout(1000);
  
  await mobilePage.screenshot({ 
    path: '/tmp/workshop-mobile-full.png', 
    fullPage: true 
  });
  
  await browser.close();
  console.log('✅ Screenshots saved!');
})();
