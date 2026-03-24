import {test, expect} from "@playwright/test";
 
// test("Test Register Page",async ({ page }) => {
//     await page.goto("https://demo.automationtesting.in/Register.html");
 
//     await page.getByPlaceholder("First Name").fill("Ayush");
//     await page.getByPlaceholder("Last Name").fill("Dash");
 
//     await page.locator("textarea[ng-model='Adress']").fill("123 Main Street");
 
//     await page.locator("input[type='email']").fill("robot.automation@example.com");
//     await page.locator("input[type='tel']").fill("1234567890");
 
//     const totalGenders = await page.locator("input[name='radiooptions']");
//     console.log("Total Genders: " + await totalGenders.count());
 
//     for(let i =0 ; await totalGenders.count(); i++){
//         const rowValue = totalGenders.nth(i);
//         const genderValue = await rowValue.getAttribute("value");
//         console.log("Gender Value: " + genderValue);
//         if(genderValue === "Male"){
//             await rowValue.check();
//             break;
//         }
//     }


//     const totalhobbies=await page.locator("input[type='checkbox']");
//     console.log("Total Hobbies: "+await totalhobbies.count());

//     for(let i=0;i<await totalhobbies.count();i++){
//         const rowValue=totalhobbies.nth(i);
//         const hobbyValue=await rowValue.getAttribute("value");
//         console.log("Hobby Value: "+hobbyValue);
//         if(hobbyValue==="Cricket"||hobbyValue==="Hockey")
//         {
//             await rowValue.check();
//             continue;
//         }
//     }
//     await page.waitForTimeout(5000);
 
// });


test("Test Register Page",async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
 
    await page.getByPlaceholder("First Name").fill("Ayush");
    await page.getByPlaceholder("Last Name").fill("Dash");
 
    await page.locator("textarea[ng-model='Adress']").fill("123 Main Street");
 
    await page.locator("input[type='email']").fill("robot.automation@example.com");
    await page.locator("input[type='tel']").fill("1234567890");
 
    const totalGenders = await page.locator("input[name='radiooptions']");
    console.log("Total Genders: " + await totalGenders.count());
 
    for(let i =0 ; await totalGenders.count(); i++){
        const rowValue = totalGenders.nth(i);
        const genderValue = await rowValue.getAttribute("value");
        console.log("Gender Value: " + genderValue);
        if(genderValue === "Male"){
            await rowValue.check();
            break;
        }
    }


    const totalhobbies=await page.locator("input[type='checkbox']");
    console.log("Total Hobbies: "+await totalhobbies.count());

    for(let i=0;i<await totalhobbies.count();i++){
        const rowValue=totalhobbies.nth(i);
        const hobbyValue=await rowValue.getAttribute("value");
        console.log("Hobby Value: "+hobbyValue);
        if(hobbyValue==="Cricket"||hobbyValue==="Hockey")
        {
            await rowValue.check();
            continue;
        }
    }

    // await page.locator("#msdd").click();
    // await page.locator(".ui-corner-all").locator('a',{hasText:'English'}).click();
    // const languages=await page.locator(".ui-corner-all").locator('a');
    // const cnt=await languages.count();
    // for(let i=0;i<cnt;i++)
    // {
    //     const rowValue=languages.nth(i);
    //     if(await rowValue.textContent()==="English" || await rowValue.textContent()==="Arabic")
    //     {
    //         await rowValue.click();
    //         continue;
    //     }
        
    // }    


    await page.locator("span[role='combobox']").click();
    const searchBox=page.locator("input[type='search']");
    searchBox.fill("India");
    await page.locator("li",{hasText:"India"}).click();
    
    const fileUpload=await page.locator("#imagesrc");
    await fileUpload.setInputFiles("C:\\Users\\308233\\Downloads\\Book1.xlsx");
    
    await page.waitForTimeout(5000);
 
});
 