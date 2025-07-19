import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('Login test with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.login('student', 'Password123');

  console.log('Current URL:', page.url());

  // Validate login success
  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
});
