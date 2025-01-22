const { test, expect } = require('@playwright/test');

const { HomeLocators } = require("../Locators/HomeLocator");

class HomePage {
  constructor(page) {
    this.page = page;
  }

async verifyIsGreetingMessageVisible() {
  await expect(this.page.locator(HomeLocators.greetingMessage)).toBeVisible();
  }
}

module.exports = { HomePage };