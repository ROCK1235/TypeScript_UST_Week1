import{test,expect} from '@playwright/test'
import{createBdd} from 'playwright-bdd'
const {Given,When,Then}=createBdd();

Then('user clicks on profile', async ({page}) => {
  await page.locator("//div[@class='nav-items u-d-trigger dropdown-toggle push-droparrow']").click();
});

Then('user clicks on My Medical Records', async ({page}) => {
  await page.getByRole('link', { name: 'My Medical Records' }).click();
});

Then('user clicks on upload Records', async ({page}) => {
  await page.locator("//div[@class='button text-center heading-four btn-positive']").click();
});

Then('user clicks on Add a file,fill details', async ({page}) => {
  await page.locator("//div[@class='record-upload-add-tile text-small text-center']").click();
  await page.locator("input[type='file']").setInputFiles("C:\\Users\\308233\\Downloads\\Book1.pdf");
  await page.getByPlaceholder("Title").click();
  await page.getByPlaceholder("Title").fill("Medical Purpose");
  //date picker on disabled calender
  // Navigate to target month/year

  //ISSUE IN THIS PART
        for (let i = 0; i < 12; i++) {
            const current = await page.locator(".react-datepicker__current-month").textContent();

        if (current?.includes("April 2026")) break;

        await page.locator(".react-datepicker__navigation--next").click();
}
//ISSUE IN THIS PART
// Select enabled date
    await page.locator(
        `.react-datepicker__day:not(.react-datepicker__day--disabled)[aria-label="day-20"]`).click();

    await page.locator("//div[text()='Report']").click();
    
});

Then('user clicks Done', async ({page}) => {
  await page.locator("//div[text()='Done']").click();
});

Then('user receives a success message', async ({page}) => {
  const successText=await page.locator("//div[text()='Success!']").textContent();
  await expect(successText).toBe("Success!");
});