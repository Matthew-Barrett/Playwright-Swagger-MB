import { expect, type Locator, type Page} from '@playwright/test';
import { UrlProperties } from '../locators/UrlProperties.ts';
import { loginDataProperties } from '../data/loginDataProperties.ts';

export class LoginPage {
  readonly page: Page;
  readonly userName: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  static loggedInAs: Text;


  constructor(page: Page) {
    this.page = page;
    this.userName = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton =  page.locator('#login-button');
    this.errorMessage = page.locator('#login_button_container');
  }

  async goto() {
    await this.page.goto(UrlProperties.LOGIN_PAGE);
  }

  async validLogin() {
    try{
    await this.userName.fill(loginDataProperties.userNameStandardUser)
    await this.password.fill(loginDataProperties.password)
    await this.loginButton.click()
    } catch (e) {
      console.log(e)
    }
  }

  async invalidLogin() {
    try {
    await this.userName.fill(loginDataProperties.userNameStandardUser)
    await this.password.fill(loginDataProperties.invalidPassword)
    await this.loginButton.click()
    await expect(this.errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service')
    } catch (e) {
      console.log(e)
    }
  }

}
