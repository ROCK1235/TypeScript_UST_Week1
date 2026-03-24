import {test,expect} from "@playwright/test";
 
test("Mouse Drag Test", async ({page}) => {
    await page.goto("https://demo.automationtesting.in/Static.html");
    await page.locator("//a[text() = 'Interactions ']").hover();
    await page.waitForTimeout(2000);
    const Slogo = await page.locator("#angular");
    const demoLogo = await page.locator("#mongo");
    const seleniumLogo = await page.locator("#node");
 
    const destination = await page.locator("#droparea");
 
    await Slogo.dragTo(destination);
    await page.waitForTimeout(3000);
    await demoLogo.dragTo(destination);
    await page.waitForTimeout(3000);
    await seleniumLogo.dragTo(destination);
    await page.waitForTimeout(3000);
})