// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Login Functionality', () => {

  test('Login with valid credentials', async ({ Given, Then, And, page }) => { 
    await Given('user is on home page', null, { page }); 
    await Then('user clicks on Login or SignUp Button', null, { page }); 
    await Then('user enters username', null, { page }); 
    await And('user enters password', null, { page }); 
    await Then('user untick Remember me option', null, { page }); 
    await And('user clicks login button', null, { page }); 
    await Then('user is logged in successfully', null, { page }); 
  });

  test('Login with valid phone number and invalid password', async ({ Given, Then, And, page }) => { 
    await Given('user is on home page', null, { page }); 
    await Then('user clicks on Login or SignUp Button', null, { page }); 
    await Then('user enters userid as "9438625192"', null, { page }); 
    await And('user enters password as "hello"', null, { page }); 
    await Then('user untick Remember me option', null, { page }); 
    await And('user clicks login button', null, { page }); 
    await Then('user receives error message', null, { page }); 
  });

  test('Login with invalid phone number and valid password', async ({ Given, Then, And, page }) => { 
    await Given('user is on home page', null, { page }); 
    await Then('user clicks on Login or SignUp Button', null, { page }); 
    await Then('user enters userid as "9438625152"', null, { page }); 
    await And('user enters password as "Ayush1235@"', null, { page }); 
    await Then('user untick Remember me option', null, { page }); 
    await And('user clicks login button', null, { page }); 
    await Then('user receives an error message regarding wrong username', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":2,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given user is on home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":4,"keywordType":"Outcome","textWithKeyword":"Then user clicks on Login or SignUp Button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then user enters username","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"And user enters password","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then user untick Remember me option","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And user clicks login button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then user is logged in successfully","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given user is on home page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then user clicks on Login or SignUp Button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then user enters userid as \"9438625192\"","stepMatchArguments":[{"group":{"start":22,"value":"\"9438625192\"","children":[{"start":23,"value":"9438625192","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"And user enters password as \"hello\"","stepMatchArguments":[{"group":{"start":24,"value":"\"hello\"","children":[{"start":25,"value":"hello","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then user untick Remember me option","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"And user clicks login button","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then user receives error message","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":27,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given user is on home page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then user clicks on Login or SignUp Button","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then user enters userid as \"9438625152\"","stepMatchArguments":[{"group":{"start":22,"value":"\"9438625152\"","children":[{"start":23,"value":"9438625152","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"And user enters password as \"Ayush1235@\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Ayush1235@\"","children":[{"start":25,"value":"Ayush1235@","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then user untick Remember me option","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"And user clicks login button","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then user receives an error message regarding wrong username","stepMatchArguments":[]}]},
]; // bdd-data-end