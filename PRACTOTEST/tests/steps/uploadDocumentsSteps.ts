import{test,expect} from '@playwright/test'
import{createBdd} from 'playwright-bdd'
const {Given,When,Then}=createBdd();

/*
    BACKGROUND SCENARIOS

*/
Given('user is on login page', async ({page}) => {
   await page.goto("https://practo.com")
});

Then('user clicks on Login or SignUp Button', async ({page}) => {
  await page.locator("//a[text()='Login / Signup']").click();
});

Then('user enters username', async ({page}) => {
  await page.getByPlaceholder("Mobile Number / Email ID").fill("9438625192");
});

Then('user enters password', async ({page}) => {
  await page.getByPlaceholder("Password").fill("Ayush1235@");
});

Then('user untick Remember me option', async ({page}) => {
  await page.locator("//label[@class='mousePointer textMuted line-height-20']").click();
});

Then('user clicks login button', async ({page}) => {
  await page.locator("//button[@type='submit']").click();
});

Then('user is logged in successfully', async ({page}) => {
  const pageUrl=await page.url();
  await expect(pageUrl).toBe("https://www.practo.com/");
});


/*
    Upload Document Scenarios

*/

// Then('user clicks on profile', async ({page}) => {
//   await page.locator("//div[@class='nav-items u-d-trigger dropdown-toggle push-droparrow']").click();
// });

// Then('user clicks on My Medical Records', async ({page}) => {
//   await page.getByRole('link', { name: 'My Medical Records' }).click();
// });

// Then('user clicks on upload Records', async ({page}) => {
//   await page.locator("//div[@class='button text-center heading-four btn-positive']").click();
// });

// Then('user clicks on Add a file,fill details', async ({page}) => {
//   await page.locator("//div[@class='record-upload-add-tile text-small text-center']").click();
//   await page.locator("input[type='file']").setInputFiles("C:\\Users\\308233\\Downloads\\Book1.pdf");
//   await page.getByPlaceholder("Title").click();
//   await page.getByPlaceholder("Title").fill("Medical Purpose");
//   //date picker on disabled calender
//   // Navigate to target month/year
//   await page.getByPlaceholder("Select date").click();

//   const targetMonth = "March";
//   const targetYear = "2026";
//   const targetDay = "2";

//   // Navigate to correct month/year
//   for (let i = 0; i < 24; i++) {
//     const current = await page.locator(".react-datepicker__current-month").textContent();

//     if (current?.includes(`${targetMonth} ${targetYear}`)) break;

//     await page.locator(".react-datepicker__navigation--next").click();
//   }

//   // Select enabled date
//   await page.locator(`.react-datepicker__day:not(.react-datepicker__day--disabled)[aria-label="day-${targetDay}"]`).click();

//     await page.locator("//div[text()='Report']").click();
//     // await page.waitForTimeout(5000);
// });

// Then('user clicks Done', async ({page}) => {
//   await page.locator("//div[text()='Done']").click();
// });

// Then('user receives a success message', async ({page}) => {
//   const successText=await page.locator("//div[text()='Success!']").textContent();
//   await expect(successText).toBe("Success!");
// });


/*
  Remove Uploaded docuements
*/
Then('user clicks on profile', async ({page}) => {
  await page.locator("//div[@class='nav-items u-d-trigger dropdown-toggle push-droparrow']").click();
});

Then('user clicks on My Medical Records', async ({page}) => {
  await page.getByRole('link', { name: 'My Medical Records' }).click();
});

Then('user clicks on report which wants to remove', async ({page}) => {
  await page.locator("//span[@title='Medical Report' and text()='Medical Report']//child::span").click();
});

Then('user clicks on delete button and confirm delete', async ({page}) => {
  await page.locator("//span[@class='menu-handle icon-ic_ellipsis']").click();
  await page.locator("//div[@class='menu-item text del']").click();
  await page.locator("//div[@class='btn confirm-btn text-center']").click();

});

Then('user receives a success message', async ({page}) => {
  const message=await page.locator("//div[text()='Your records have been successfully deleted.']").textContent();
  await expect(message).toBe("Your records have been successfully deleted.")
});











