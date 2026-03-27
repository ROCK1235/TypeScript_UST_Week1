import{test,expect} from '@playwright/test'
import{createBdd} from 'playwright-bdd'
const {Given,When,Then}=createBdd();

const productName='Sauce Labs Backpack'

Given('user is on login page', async ({page}) => {
  await page.goto("https://saucedemo.com");
});

When('user enters username', async ({page}) => {
  await page.locator("#user-name").fill('standard_user');
});

When('enters password', async ({page}) => {
  await page.locator("#password").fill('secret_sauce');
});

When('clicks on login button', async ({page}) => {
  await page.locator('#login-button').click();
});

Then('user is logged in successfully', async ({page}) => {
  const prods=await page.locator("//span[text()='Products']").textContent();
  await expect(prods).toBe('Products');
});






Given('User is logged in', async ({page}) => {
  const actualUrl=await page.url();
  await expect(actualUrl).toBe('https://www.saucedemo.com/inventory.html');
});

When('User clicks on a product', async ({page}) => {
  await page.getByText(productName).click();
});

Then('the product description is available', async ({page}) => {
  const actucalProductName=await page.getByText(productName).textContent();
  await expect(actucalProductName).toBe('Sauce Labs Backpack');
});

When('user clicks on add to cart button', async ({page}) => {
  await page.locator("//button[text()='Add to cart']").click();
});

Then('the product is added to the cart', async ({page}) => {
  const cartNumber=await page.locator("//span[text()='1']").textContent();
  await expect(cartNumber).toBe('1');
});

When('User clicks on cart menu', async ({page}) => {
  await page.locator("//a[@class='shopping_cart_link']").click();
});

Then('the cart is opened', async ({page}) => {
  const actualValue=await page.getByText("Your Cart").textContent();
  await expect(actualValue).toBe("Your Cart");
});

Then('user is able to view the added product', async ({page}) => {
  const actualProduct=await page.getByText(productName).textContent();
  await expect(actualProduct).toBe(productName);
});


Then('user is able to see the entire product description', async ({page}) => {
  const description=await page.locator("//div[@data-test='inventory-item-desc']");
  await expect(description).toBeVisible();
});



