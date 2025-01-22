const { expect } = require("@playwright/test");
const {LoginLocators} = require("../Locators/LoginLocator");

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goToLoginPage() {
    await this.page.goto('/');
  }

  async loginWithCredentials(email, password) {
    await this.page.locator(LoginLocators.menuButton).click();
    await this.page.locator(LoginLocators.emailInput).click();
    await this.page.locator(LoginLocators.emailInput).fill(email);
    await this.page.locator(LoginLocators.passwordInput).click();
    await this.page.locator(LoginLocators.passwordInput).fill(password);
    await this.page.locator(LoginLocators.loginButton).click();
  }

  async getLoginErrorMessage() {
    await expect(this.page.locator(LoginLocators.errorMessage)).toBeVisible();
    await expect(this.page.locator(LoginLocators.errorMessage)).toHaveText('Credenciais Inválidas');  

  }

  async logoutPath() {
    await this.page.locator(LoginLocators.menuButton).click();
    await this.page.locator(LoginLocators.logoutButton).filter({ hasText: 'Sair' }).click();
    await expect(this.page.locator(LoginLocators.menuButton)).toBeVisible();

  }

}

module.exports = { LoginPage };
