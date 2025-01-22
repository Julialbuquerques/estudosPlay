const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { HomeLocators } = require("../Locators/HomeLocator");
const { LoginLocators } = require('../Locators/LoginLocator');
const { describe } = require('node:test');

test.describe('Suite',()=> {
    test.beforeEach(async ({page}) => {
      const loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();
    await loginPage.loginWithCredentials('testeautomacaojulia@mailto.plus', 'Senhanova1');

});

test('Adicionar item ao carrinho', async ({ page, browser }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);


  });

});