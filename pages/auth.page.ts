import { Page, expect } from "@playwright/test";

export class AuthPage {
  constructor(public page: Page) {} // <-- expose page for test access

  // === EMAIL SIGNUP/LOGIN FLOW ===

  async waitForEmailInput() {
    await expect(
      this.page.getByPlaceholder("e.g your@email.com")
    ).toBeVisible();
  }

  async enterEmail(email: string) {
    await this.page.getByPlaceholder("e.g your@email.com").fill(email);
  }

  async clickSignUpWithEmail() {
    await this.page
      .getByRole("button", { name: /Sign up with email/i })
      .click();
  }

  async waitForOtpInput() {
    await expect(
      this.page.getByRole("textbox", { name: /-Digit code/i })
    ).toBeVisible();
  }

  async enterOtp(code: string) {
    await this.page
      .getByRole("textbox", { name: /-Digit code/i })
      .fill(code);
  }

  // === SOCIAL LOGIN BUTTONS ===

  googleButton() {
    return this.page.getByRole("button", { name: /Google/i });
  }

  facebookButton() {
    return this.page.getByRole("button", { name: /Facebook/i });
  }

  appleButton() {
    return this.page.getByRole("button", { name: /Apple/i });
  }

  async clickGoogleLogin() {
    await this.googleButton().click();
  }

  async clickFacebookLogin() {
    await this.facebookButton().click();
  }

  async clickAppleLogin() {
    await this.appleButton().click();
  }
}
