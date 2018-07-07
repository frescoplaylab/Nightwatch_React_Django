// YOU SHALL NOT PASS TILL
// These assertions/tests have been writen in this test_suite.
// 1. Check for title to be 'React App'
// 2. Check for presense background image
// 3. Check background overflow property
// 4. Check for the input box to enter text
// 5. Check for button to add new tasks

module.exports = {
  'Test Loading HomePage' : function (browser) {
    browser
      .url(browser.globals.development.root_url)
      // Write your
      // code here
      .end();
  }
};
