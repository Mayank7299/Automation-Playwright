import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 1,
  reporter: [['html'], ['list']],
  use: {
    baseURL: 'https://www.floweraura.com/',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'on',
    trace: 'on-first-retry',
  },
  projects: [
    // {
    //   name: 'chrome',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     channel: 'chrome',
    //     headless: false,
    //   },
    // },
    {
      name: 'mobile-chrome',
      testMatch: /.floweraura\.spec\.ts/,  
      use: {
        ...devices['Pixel 5'],
        headless: false,
        screenshot: 'only-on-failure',
        video: 'on',
        trace: 'on-first-retry',
      },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
