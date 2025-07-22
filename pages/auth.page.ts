import { Page, expect } from "@playwright/test";

export class AuthPage {
  constructor(public page: Page) {} // <-- expose page for test access

  // === EMAIL SIGNUP/LOGIN FLOW ===

  emailInput() {
    return this.page.getByPlaceholder("e.g your@email.com");
  }

  signUpWithEmailButton() {
    return this.page.getByRole("button", { name: /Sign up with email/i });
  }

  otpInput() {
    return this.page.getByRole("textbox", { name: /-Digit code/i });
  }

  async enterEmail(email: string) {
    await this.emailInput().fill(email);
  }

  async clickSignUpWithEmail() {
    await this.signUpWithEmailButton().click();
  }

  async enterOtp(code: string) {
    await this.otpInput().fill(code);
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
