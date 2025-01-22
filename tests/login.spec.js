const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { HomeLocators } = require("../Locators/HomeLocator");
const { LoginLocators } = require('../Locators/LoginLocator');


test.describe('Suite',()=> {
    test.beforeEach(async ({page}) => {
      const loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();
});

test('Login Ferreira Costa', async ({ page, browser }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await test.step('Realizar login com e-mail e senha válidos', async () => {
    await loginPage.loginWithCredentials('testeautomacaojulia@mailto.plus', 'Senhanova1');
  });

  await test.step('Verificar login realizado com sucesso', async () => {
    await homePage.verifyIsGreetingMessageVisible();
  });

});

test('Login Ferreira Costa - email invalido', async ({ page, browser }) => {
  const loginPage = new LoginPage(page);

  await test.step('Realizar login com e-mail inválido', async () => {
    await loginPage.loginWithCredentials('testeautomacaojulia@.plus', 'Senhanova1');
  });

  await test.step('Verificar mensagem de erro de credenciais inválidas', async () => {
    await loginPage.getLoginErrorMessage();
  });

});

test('Logout Ferreira Costa', async ({ page, browser }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await test.step('Realizar login com e-mail e senha válidos', async () => {
    await loginPage.loginWithCredentials('testeteste@mailto.plus', 'Senhanova1');
  });

  await test.step('Verificar login realizado com sucesso', async () => {
    await expect(page.locator(HomeLocators.greetingMessage)).toBeVisible();
  });

  await test.step('Realizar logout na Ferreira Costa', async () => {
    await loginPage.logoutPath();
  });

  await test.step('Verificar que o usuário está deslogado', async () => {
    await expect(page.locator(LoginLocators.menuButton)).toBeVisible();
  });

});



})