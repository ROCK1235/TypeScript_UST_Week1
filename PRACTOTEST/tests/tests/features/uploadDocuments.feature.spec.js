// Generated from: tests\features\uploadDocuments.feature
import { test } from "playwright-bdd";

test.describe('upload Functionality', () => {

  test.beforeEach('Background: User is Logged in', async ({ Given, Then, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('user is on login page', null, { page }); 
    await Then('user clicks on Login or SignUp Button', null, { page }); 
    await Then('user enters username', null, { page }); 
    await And('user enters password', null, { page }); 
    await Then('user untick Remember me option', null, { page }); 
    await And('user clicks login button', null, { page }); 
    await Then('user is logged in successfully', null, { page }); 
  });
  
  test('Remove Upload document on portal', async ({ Then, And, page }) => { 
    await Then('user clicks on profile', null, { page }); 
    await And('user clicks on My Medical Records', null, { page }); 
    await And('user clicks on report which wants to remove', null, { page }); 
    await Then('user clicks on delete button and confirm delete', null, { page }); 
    await Then('user receives a success message', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\uploadDocuments.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":16,"pickleLine":44,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given user is on login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then user clicks on Login or SignUp Button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then user enters username","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"And user enters password","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then user untick Remember me option","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"And user clicks login button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then user is logged in successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then user clicks on profile","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"And user clicks on My Medical Records","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"And user clicks on report which wants to remove","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then user clicks on delete button and confirm delete","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then user receives a success message","stepMatchArguments":[]}]},
]; // bdd-data-end