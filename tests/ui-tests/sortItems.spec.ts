import { test, expect } from '@playwright/test';
import { LoginPage } from '../../test/model/pages/LoginPage.ts';
import { InventoryPage } from '../../test/model/pages/InventoryPage.ts';
import UrlProperties from '../../test/model/locators/UrlProperties.ts';

test('sort items', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.validLogin();
    await expect(page).toHaveURL(UrlProperties.BASE_URL+'inventory.html');
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.filterItems('Price (high to low)');
    await page.waitForLoadState('networkidle');
    await inventoryPage.getItemPrices();
    const isSorted = await inventoryPage.isSortedByPriceDescending();
    expect(isSorted).toBeTruthy();
    
});