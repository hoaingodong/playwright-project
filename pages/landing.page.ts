import { Page } from '@playwright/test';

export class LandingPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://dev-dmv.astraler.com');
  }

  async clickLogin() {
    await this.page.getByRole('link', { name: 'Login' }).click();
  } 
}
