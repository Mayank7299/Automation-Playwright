import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 1,
  reporter: [['html'], ['list']],
  use: {
    baseURL: 'https://www.floweraura.com/',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    // {
    //   name: 'chrome', // you can name it chrome or google-chrome for clarity
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     channel: 'chrome',  // This tells Playwright to use Google Chrome instead of Chromium
    //     headless: true,    // Optional: run in headed mode so you see browser window
    //   },
    // },
      {
      name: 'mobile-chrome',
      use: {
        ...devices['Pixel 5'],   // Mobile device emulation (screen size, user agent, etc.)
        headless: true,         // Optional, show browser window
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

