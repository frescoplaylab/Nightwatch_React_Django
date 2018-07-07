module.exports = {
  'Load HomePage' : function (browser) {
    browser
      .url(browser.globals.development.root_url)
      .waitForElementVisible('body', browser.globals.development.time_out)
  },

  'Test Add Task On Enter' : function (browser) {
    browser
      .setValue('input.addTask-input', ['Pickup Power Stone from Xandar', browser.Keys.ENTER])
      .pause(browser.globals.development.time_out)
      .waitForElementPresent('div.ListItem:first-of-type', browser.globals.development.time_out)
      .waitForElementPresent('div.ListItem:first-of-type .checkbox', browser.globals.development.time_out)
      .waitForElementPresent('div.ListItem:first-of-type .content', browser.globals.development.time_out)
      .waitForElementPresent('div.ListItem:first-of-type .button-container .edit', browser.globals.development.time_out)
      .waitForElementPresent('div.ListItem:first-of-type .button-container .delete', browser.globals.development.time_out)
      .assert.containsText('div.ListItem:first-of-type .content', 'Pickup Power Stone from Xandar')
      .assert.value('input.addTask-input', "")
  },

  'Test Add Task Via Button' : function (browser) {
    browser
      .setValue('input.addTask-input', 'EmoBlackmail and get Space Stone from Loki')
      .click('button.addTask-button')
      .pause(browser.globals.development.time_out)
      .waitForElementPresent('div.ListItem:first-of-type', browser.globals.development.time_out)
      .waitForElementPresent('div.ListItem:first-of-type .checkbox', browser.globals.development.time_out)
      .waitForElementPresent('div.ListItem:first-of-type .content', browser.globals.development.time_out)
      .waitForElementPresent('div.ListItem:first-of-type .button-container .edit', browser.globals.development.time_out)
      .waitForElementPresent('div.ListItem:first-of-type .button-container .delete', browser.globals.development.time_out)
      .assert.containsText('div.ListItem:first-of-type .content', 'EmoBlackmail and get Space Stone from Loki')
      .assert.value('input.addTask-input', "")
      .saveScreenshot('./reports/saved_screenshot.png')
      .end();
  }
};
