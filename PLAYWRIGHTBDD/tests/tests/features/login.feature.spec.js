// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Login Functionality', () => {

  test('Login with valid credentials', async ({ Given, Then, And, page }) => { 
    await Given('user is on login page', null, { page }); 
    await Then('user enters username', null, { page }); 
    await And('user enters password', null, { page }); 
    await And('user clicks login button', null, { page }); 
    await Then('user is logged in successfully', null, { page }); 
    await And('user is able to navigate to product page', null, { page }); 
  });

  test('Login with locked user credentials', async ({ Given, Then, And, page }) => { 
    await Given('user is on login page', null, { page }); 
    await Then('user enters locked username', null, { page }); 
    await And('user enters password', null, { page }); 
    await And('user clicks login button', null, { page }); 
    await Then('user gets an error message', null, { page }); 
    await And('user is back on login page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":2,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given user is on login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":4,"keywordType":"Outcome","textWithKeyword":"Then user enters username","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"And user enters password","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"And user clicks login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then user is logged in successfully","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And user is able to navigate to product page","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given user is on login page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then user enters locked username","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And user enters password","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And user clicks login button","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then user gets an error message","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"And user is back on login page","stepMatchArguments":[]}]},
]; // bdd-data-end