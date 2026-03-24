import {test, expect} from "@playwright/test";
 
// test("Test Register Page",async ({ page }) => {
//     await page.goto("https://practo.com");

//     //await page.waitForTimeout(5000)
    
//     //await page.locator(".product-tab__title").click();
//     await page.locator("//div[@class='product-tab']/child::a[@title='book']").click();
//     //await page.waitForTimeout(5000);
//     await page.getByPlaceholder("Search location").fill("Hyderabad");
//     await page.locator("//div[@data-qa-id='omni-suggestion-main'and @class='c-omni-suggestion-item__content__title'and text()='Hyderabad']").click();
//     await page.getByPlaceholder("Search doctors, clinics, hospitals, etc.").fill("Dentist");
//     await page.locator("//div[@data-qa-id='omni-suggestion-main'and @class='c-omni-suggestion-item__content__title'and text()='Dentist']").click();
//     await page.waitForTimeout(5000);
//     await expect(page).toHaveURL("https://www.practo.com/search/doctors?results_type=doctor&q=%5B%7B%22word%22%3A%22Dentist%22%2C%22autocompleted%22%3Atrue%2C%22category%22%3A%22subspeciality%22%7D%5D&city=Hyderabad");
//     await page.waitForTimeout(5000);
//     // await page.getByPlaceholder("First Name").fill("Ayush");
//     // await page.getByPlaceholder("Last Name").fill("Dash");
 
//     // await page.locator("textarea[ng-model='Adress']").fill("123 Main Street");
 
//     // await page.locator("input[type='email']").fill("robot.automation@example.com");
//     // await page.locator("input[type='tel']").fill("1234567890");
 
//     // const totalGenders = await page.locator("input[name='radiooptions']");
//     // console.log("Total Genders: " + await totalGenders.count());
// });
// test("Test Consult doctor Page",async ({ page }) => {
//     await page.goto("https://practo.com");

//     //await page.waitForTimeout(5000)
    
//     //await page.locator(".product-tab__title").click();
//     await page.locator("//div[text()='Find Doctors']").click();
//     await page.locator("//span[contains(text(),'Consult with a doctor')]").click();
//     await expect(page).toHaveURL("https://www.practo.com/doctors");
//     await page.waitForTimeout(5000);

// });
// test("Test Cough & Cold Page",async ({ page }) => {
//     await page.goto("https://practo.com");

//     //await page.waitForTimeout(5000)
    
//     //await page.locator(".product-tab__title").click();
//     await page.locator("//div[text()='Find Doctors']").click();
//     await page.locator("//span[contains(text(),'Consult with a doctor')]").click();

//     await page.locator("//h4[contains(text(),'Cough & Cold?')]/parent::div/parent::a").click();
//     await page.getByPlaceholder("Enter patient name for prescriptions").fill("Ayush Kumar Dash");

//     await page.waitForTimeout(3000);

//     await page.getByPlaceholder("Enter mobile number").fill("9438625192");
//     await page.waitForTimeout(3000);
//     await page.locator("//button['Continue']").click();
//     await page.waitForTimeout(5000);

// });

// test("Test Register Page",async ({ page }) => {
//     await page.goto("https://practo.com");

//     //await page.waitForTimeout(5000)
    
//     //await page.locator(".product-tab__title").click();
//     await page.locator("//div[@class='product-tab']/child::a[@title='book']").click();
//     //await page.waitForTimeout(5000);
//     await page.getByPlaceholder("Search location").fill("Hyderabad");
//     await page.locator("//div[@data-qa-id='omni-suggestion-main'and @class='c-omni-suggestion-item__content__title'and text()='Hyderabad']").click();
//     await page.getByPlaceholder("Search doctors, clinics, hospitals, etc.").fill("Dentist");
//     await page.locator("//div[@data-qa-id='omni-suggestion-main'and @class='c-omni-suggestion-item__content__title'and text()='Dentist']").click();
//     //await page.waitForTimeout(5000);
//     //await expect(page).toBeVisible();
//     await page.waitForTimeout(5000);
//     // await page.getByPlaceholder("First Name").fill("Ayush");
//     // await page.getByPlaceholder("Last Name").fill("Dash");
 
//     // await page.locator("textarea[ng-model='Adress']").fill("123 Main Street");
 
//     // await page.locator("input[type='email']").fill("robot.automation@example.com");
//     // await page.locator("input[type='tel']").fill("1234567890");
 
//     // const totalGenders = await page.locator("input[name='radiooptions']");
//     // console.log("Total Genders: " + await totalGenders.count());
// });

// test("Test Book Doctor Page",async ({ page }) => {
//     await page.goto("https://practo.com");

//     //await page.waitForTimeout(5000)
    
//     //await page.locator(".product-tab__title").click();
//     await page.locator("//div[@class='product-tab']/child::a[@title='book']").click();
   
//     await page.getByPlaceholder("Search location").fill("Hyderabad");
//     await page.locator("//div[@data-qa-id='omni-suggestion-main'and @class='c-omni-suggestion-item__content__title'and text()='Hyderabad']").click();
//     await page.getByPlaceholder("Search doctors, clinics, hospitals, etc.").fill("Dentist");
//     await page.locator("//div[@data-qa-id='omni-suggestion-main'and @class='c-omni-suggestion-item__content__title'and text()='Dentist']").click();
//     await page.locator("//div[contains(@class,'u-color--primary uv2-spacer--xs-bottom')]/child::h2[text()='Dr. Chandrashekhar Reddy']").click();
//     const slots=await page.locator("//div[text()='today']/following-sibling::div[contains(@class,'slot-count')]//span");
//     await expect(slots).toBeVisible();
//     await page.waitForTimeout(10000);

// });


test("Test Upload Files ",async ({ page }) => {
    await page.goto("https://practo.com");

    //await page.waitForTimeout(5000)
    
    //await page.locator(".product-tab__title").click();
    await page.locator("//a[text()='Login / Signup']").click();
    await page.getByPlaceholder("Mobile Number / Email ID").fill("9438625192");
    await page.getByPlaceholder("Password").fill("Ayush1235@");
    await page.locator("//label[@class='mousePointer textMuted line-height-20']").click();
    await page.locator("//button[@type='submit']").click();

    await page.locator("//div[@class='nav-items u-d-trigger dropdown-toggle push-droparrow']").click();
    await page.getByRole('link', { name: 'My Medical Records' }).click();

//Locating upload files button and upload files
    await page.locator("//div[@class='button text-center heading-four btn-positive']").click();

    await page.locator("//div[@class='record-upload-add-tile text-small text-center']").click();
    const fileUpload=await page.locator("//div[@class='record-upload-add-tile text-small text-center']");
     await fileUpload.setInputFiles("C:\\Users\\308233\\Downloads\\Book1.pdf");
    //await page.locator("input[type='file']").setInputFiles("C:\\Users\\308233\\Downloads\\Book1.pdf");
    await page.waitForTimeout(3000);


    

    // await page.getByPlaceholder("Search doctors, clinics, hospitals, etc.").fill("Dentist");
    // await page.locator("//div[@data-qa-id='omni-suggestion-main'and @class='c-omni-suggestion-item__content__title'and text()='Dentist']").click();
    // await page.locator("//div[contains(@class,'u-color--primary uv2-spacer--xs-bottom')]/child::h2[text()='Dr. Chandrashekhar Reddy']").click();
    // const slots=await page.locator("//div[text()='today']/following-sibling::div[contains(@class,'slot-count')]//span");
    // await expect(slots).toBeVisible();
    await page.waitForTimeout(10000);

});