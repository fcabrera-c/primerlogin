Given(/^we visit the "([^"]*)"$/, function(url) {
  browser.get("https://the-internet.herokuapp.com/login");
});
Given(/^we put this credentials "([^"]*)" and password "([^"]*)"$/, function(arg1, arg2) {
  $("#username").sendKeys("john.nobody");
  $("#password").sendKeys("foo123");
});
Given(/^click on button "([^"]*)"$/, function(arg1) {
  $(".fa-sign-in").click();
});
Then(/^we receive a message containing an "([^"]*)"$/, function(arg1) {
  expect("Your username is invalid");
});
Then(/^we the login screen appears again$/, function() {
 expect("https://the-internet.herokuapp.com/login");
});

Given(/^we put the good credentials$/, function() {
  $("#username").sendKeys("tomsmith");
  $("#password").sendKeys("SuperSecretPassword!");
});

Then(/^we click and we reach the home page with a welcome "([^"]*)"$/, function(arg1) {
  $(".fa-sign-in").click();
});