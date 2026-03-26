Feature:Login Functionality
Scenario:Login with valid credentials
Given user is on login page
Then user enters username
And user enters password
And user clicks login button
Then user is logged in successfully
And user is able to navigate to product page



Scenario:Login with locked user credentials
Given user is on login page
Then user enters username as "performance_glitch_user"
And user enters password as "secret_sauce"
And user clicks login button
Then user is logged in successfully
And user is able to navigate to product page