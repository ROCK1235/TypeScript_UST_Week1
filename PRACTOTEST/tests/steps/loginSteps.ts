import{test,expect} from '@playwright/test'
import{createBdd} from 'playwright-bdd'
const {Given,When,Then}=createBdd();


/*
    SCENARIO 1

*/
Given('user is on home page', async ({page}) => {
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
  await expect(pageUrl).toBe("https://www.practo.com/")
});



/*
    SCENARIO 2

*/
Then('user enters userid as {string}', async ({page}, userId: string) => {
  await page.getByPlaceholder("Mobile Number / Email ID").fill(userId);
});

Then('user enters password as {string}', async ({page}, password: string) => {
  await page.getByPlaceholder("Password").fill(password);
});

Then('user receives error message', async ({page}) => {
  await expect(page.locator("#passwordErrorBlock")).toHaveText("Incorrect password");
});

//SCENARIO 3

Then('user receives an error message regarding wrong username', async ({page}) => {
  await expect(page.locator("#usernameErrorBlock")).toHaveText("Mobile Number is not registered");
});