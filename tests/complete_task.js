module.exports = {
  'Add Task' : function (browser) {
    browser
      .url(browser.globals.development.root_url)
      .waitForElementVisible('body', browser.globals.development.time_out)
      .setValue('input.addTask-input', 'Send army to Wakanda')
      .click('button.addTask-button')
  },

  'Complete Task' : function (browser) {
    browser
      .pause(500)
      .click('div.ListItem:first-of-type .checkbox')
      .pause(500)
      .assert.cssClassPresent('div.ListItem:first-of-type', 'done')
      .waitForElementPresent('div.ListItem:first-of-type .button-container .hide', browser.globals.development.time_out)
      .waitForElementPresent('div.ListItem:first-of-type .button-container .delete', browser.globals.development.time_out)
      .assert.cssProperty('div.ListItem:first-of-type.done', 'text-decoration', 'line-through solid rgb(255, 255, 255)')
      .end();
  }
};
