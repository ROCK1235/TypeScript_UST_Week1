# Feature:upload Functionality

# Scenario:Upload document on portal
# Given user is on home page
# Then  user clicks on Login or SignUp Button
# Then  user enters username
# And  user enters password
# Then user untick Remember me option
# And  user clicks login button
# Then user is logged in successfully
# Then user clicks on profile
# And  user clicks on My Medical Records
# And  user clicks on upload Records
# Then user clicks on Add a file,fill details
# And  user clicks Done
# Then user receives a success message


Feature:upload Functionality


Background:User is Logged in
Given user is on login page
Then  user clicks on Login or SignUp Button
Then  user enters username
And  user enters password
Then user untick Remember me option
And  user clicks login button
Then user is logged in successfully


# Scenario:Upload document on portal

# Then user clicks on profile
# And  user clicks on My Medical Records
# And  user clicks on upload Records
# Then user clicks on Add a file,fill details
# And  user clicks Done
# Then user receives a success message




Scenario:Remove Upload document on portal

Then user clicks on profile
And  user clicks on My Medical Records
And  user clicks on report which wants to remove
Then user clicks on delete button and confirm delete
Then user receives a success message

