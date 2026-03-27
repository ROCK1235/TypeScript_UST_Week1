# Feature:Login Functionality
# Scenario:Login with valid credentials
# Given user is on home page
# Then user clicks on Login or SignUp Button
# Then user enters username
# And user enters password
# Then user untick Remember me option
# And user clicks login button
# Then user is logged in successfully



# Scenario:Login with valid phone number and invalid password
# Given user is on home page
# Then user clicks on Login or SignUp Button
# Then user enters userid as "9438625192"
# And user enters password as "hello"
# Then user untick Remember me option
# And user clicks login button
# Then user receives error message




# Scenario:Login with invalid phone number and valid password
# Given user is on home page
# Then user clicks on Login or SignUp Button
# Then user enters userid as "9438625152"
# And user enters password as "Ayush1235@"
# Then user untick Remember me option
# And user clicks login button
# Then user receives an error message regarding wrong username