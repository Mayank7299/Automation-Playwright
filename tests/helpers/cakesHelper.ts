// tests/helpers/cakesHelper.ts
import { Page, expect } from '@playwright/test';

export class CakesHelper {
  constructor(private page: Page) {}

  async enterPincode(pincode: string) {
    const { page } = this;
    const pincodeInput = page.locator('//input[@class="selectCityPincode"]');
 //   await expect(pincodeInput).toBeVisible();
    await pincodeInput.click();
    await pincodeInput.fill(pincode);

    const pincodeSuggestion = page.locator(`//span[text()="${pincode}"]`).first();
    await expect(pincodeSuggestion).toBeVisible({ timeout: 50000 });
    await pincodeSuggestion.click();

    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/floweraura\.com/);
  }

  async navigateToRegularCakes() {
    const { page } = this;
    await page.click('//div[contains(@class, "header_left_r")]');
    await page.click('(//span[text()="Cakes"])[2]');
    await page.click('//li[@id="2625"]'); // By Type
    await page.click('//li[@id="1301"]'); // Regular Cakes

 //   await expect(page).toHaveURL(/cakes/regular-cakes/);
  }

  async selectFirstCake() {
    const { page } = this;
    const firstCake = page.locator('(//img[@id="ProductListItems-0"])[1]');
    await expect(firstCake).toBeVisible({ timeout: 10000 });
    await firstCake.click();

    await expect(page.locator('//*[@class="discription-head"]//h1')).toBeVisible();
    const buyNowButton = page.locator('(//*[text()="BUY NOW | "])[3]');
    await expect(buyNowButton).toBeVisible();
    await buyNowButton.click();
  }

  async skipAddOns() {
    const { page } = this;
    const addOnSubmitBtn = page.locator('//*[@id="addon-form-submit"]');
    await expect(addOnSubmitBtn).toBeVisible({ timeout: 10000 });
    await addOnSubmitBtn.click();
  }
}
