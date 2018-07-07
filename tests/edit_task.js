module.exports = {
  'Add Task' : function (browser) {
    browser
      .url(browser.globals.development.root_url)
      .waitForElementVisible('body', browser.globals.development.time_out)
      .setValue('input.addTask-input', ['Convince Gamora to join your side', browser.Keys.ENTER])
  },

  'Edit Task' : function (browser) {
    browser
      .pause(browser.globals.development.time_out)
      .click('div.ListItem:first-of-type .button-container .edit')
      .waitForElementPresent('div.ListItem:first-of-type input.hide', browser.globals.development.time_out)
      .waitForElementPresent('div.ListItem:first-of-type input.ListItem-input', browser.globals.development.time_out)
      .assert.elementNotPresent('div.ListItem:first-of-type .content')
      .waitForElementPresent('div.ListItem:first-of-type .button-container .save', browser.globals.development.time_out)
      .waitForElementPresent('div.ListItem:first-of-type .button-container .cancel', browser.globals.development.time_out)
  },

  'Update Task' : function (browser) {
    browser
      .clearValue('div.ListItem:first-of-type input.ListItem-input')
      .setValue('div.ListItem:first-of-type input.ListItem-input', 'Kill Gamora and get soul stone')
      .click('div.ListItem:first-of-type .button-container .save')
      .pause(browser.globals.development.time_out)
      .assert.elementNotPresent('div.ListItem:first-of-type .button-container .save')
      .waitForElementPresent('div.ListItem:first-of-type .content', browser.globals.development.time_out)
      .assert.containsText('div.ListItem:first-of-type .content', 'Kill Gamora and get soul stone')
      .end();
  }
};
