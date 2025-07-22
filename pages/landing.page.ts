import { Page } from "@playwright/test";

export class LandingPage {
  constructor(private page: Page) {}

  loginLink() {
    return this.page.getByRole("link", { name: "Login" });
  }

  tryForFreeButton() {
    return this.page.locator("button").filter({ hasText: /^Try for FREE$/ });
  }

  async goto() {
    await this.page.goto("/");
  }

  async clickLogin() {
    await this.loginLink().click();
  }

  async clickTryForFreeButton() {
    await this.tryForFreeButton().click();
  }
}
