import { test, expect } from '@playwright/test';
import { LoginPage } from '../../test/model/pages/LoginPage.ts';
import UrlProperties from '../../test/model/locators/UrlProperties.ts';

test('login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.validLogin();
    await expect(page).toHaveURL(UrlProperties.BASE_URL+'inventory.html');    
});

test('login - fail', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.invalidLogin();
});
