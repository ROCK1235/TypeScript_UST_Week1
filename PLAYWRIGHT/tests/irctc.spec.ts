import {test, expect} from "@playwright/test";
test("To Automate IRCTC Booking",async({page})=>{
    await page.goto("https://www.irctc.co.in/nget/train-search");

    await page.getByRole('searchbox',{name : "Enter From station. Input is Mandatory."}).fill("trivandrum");
    await page.getByRole('searchbox',{name : "Enter To station. Input is Mandatory."}).fill("Bhubaneswar");
    await page.locator("//span[@class='ng-tns-c69-9 ui-calendar']").fill("15/04/2026");
   await page.waitForTimeout(5000);
});