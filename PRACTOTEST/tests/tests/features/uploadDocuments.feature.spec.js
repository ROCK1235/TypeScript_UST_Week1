// Generated from: tests\features\uploadDocuments.feature
import { test } from "playwright-bdd";

test.describe('upload Functionality', () => {

  test('Upload document on portal', async ({ Given, Then, And, page }) => { 
    await Given('user is on home page', null, { page }); 
    await Then('user clicks on Login or SignUp Button', null, { page }); 
    await Then('user enters username', null, { page }); 
    await And('user enters password', null, { page }); 
    await Then('user untick Remember me option', null, { page }); 
    await And('user clicks login button', null, { page }); 
    await Then('user is logged in successfully', null, { page }); 
    await Then('user clicks on profile', null, { page }); 
    await And('user clicks on My Medical Records', null, { page }); 
    await And('user clicks on upload Records', null, { page }); 
    await Then('user clicks on Add a file,fill details', null, { page }); 
    await And('user clicks Done', null, { page }); 
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
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user is on home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then user clicks on Login or SignUp Button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then user enters username","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"And user enters password","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then user untick Remember me option","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And user clicks login button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then user is logged in successfully","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then user clicks on profile","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"And user clicks on My Medical Records","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And user clicks on upload Records","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then user clicks on Add a file,fill details","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And user clicks Done","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then user receives a success message","stepMatchArguments":[]}]},
]; // bdd-data-end