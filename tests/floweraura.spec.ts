import { test, expect } from '@playwright/test';
import { CakesHelper } from './helpers/cakesHelper';
import { config } from '../config/staging.config';

 test.setTimeout(60000);

test.describe('Cakes Flow || FlowerAura', () => {
  test('should complete the flow successfully', async ({ page }) => {
    const helper = new CakesHelper(page);

    try {
      console.log("Starting Cakes Test Flow...");
      await page.goto(config.baseURL);
      await expect(page).toHaveTitle(/FlowerAura/);

      await helper.enterPincode('122001');
      await page.screenshot({ path: 'screenshots/step-01-pincode.png' });

      await helper.navigateToRegularCakes();
      await page.screenshot({ path: 'screenshots/step-02-cakes.png' });

      await helper.selectFirstCake();
      await page.screenshot({ path: 'screenshots/step-03-product.png' });

      await helper.skipAddOns();
      await page.screenshot({ path: 'screenshots/step-04-addons.png' });

      console.log("Cake purchase flow completed successfully.");
    } catch (error) {
      console.error("Flow failed:", error);
      await page.screenshot({ path: 'screenshots/error.png' });
      throw error;
    }
  });
});
