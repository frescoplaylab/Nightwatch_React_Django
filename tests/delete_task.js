module.exports = {
  'Add Task' : function (browser) {
    browser
      .url(browser.globals.development.root_url)
      .waitForElementVisible('body', browser.globals.development.time_out)
      .setValue('input.addTask-input', 'Gather all infinity stones and save the universe')
      .click('button.addTask-button')
      .setValue('input.addTask-input', 'Think before killing half of universe')
      .click('button.addTask-button')
  },

  'Delete Task' : function (browser) {
    browser
      .pause(browser.globals.development.time_out)
      .execute(function() { document.querySelector('div.ListItem:first-of-type .button-container button.delete.Button').click(); })
      .pause(browser.globals.development.time_out)
      .assert.containsText('div.ListItem:first-of-type .content', 'Gather all infinity stones and save the universe')
      .end();
  }
};
