import { expect, type Locator, type Page} from '@playwright/test';
import { UrlProperties } from '../locators/UrlProperties.ts';
import { loginDataProperties } from '../data/loginDataProperties.ts';

export class InventoryPage {
    
    readonly page: Page;
    readonly filter: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    static loggedInAs: Text;
    private readonly itemPrices: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.filter = page.locator('#user-name');
      this.password = page.locator('#password');
      this.loginButton =  page.locator('#login-button');
      this.errorMessage = page.locator('#login_button_container');
      this.itemPrices = page.locator('.inventory_item_price');
    }
  
    async goto() {
      await this.page.goto(UrlProperties.LOGIN_PAGE);
    }


    async filterItems(sortOption) {
        try {
        await this.page.selectOption('.product_sort_container', sortOption);
        } catch (e) {
          console.log(e)
        }
      }
  
 
    async getItemPrices(): Promise<number[]> {
        const priceTexts = await this.itemPrices.allInnerTexts();
        return priceTexts.map(price => parseFloat(price.replace('$', '')));

      }
    
    async isSortedByPriceDescending(): Promise<boolean> {
        const prices = await this.getItemPrices();
        return prices.every((price, index) => index === 0 || price <= prices[index - 1]);
      }


}


