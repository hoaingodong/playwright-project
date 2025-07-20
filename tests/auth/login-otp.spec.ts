import { test, expect } from "@playwright/test";
import { LandingPage } from "../../pages/landing.page";
import { AuthPage } from "../../pages/auth.page";

test("User can sign up/login with valid email and OTP", async ({ page }) => {
  const landing = new LandingPage(page);
  const auth = new AuthPage(page);

  await landing.goto();
  await landing.clickLogin();

  await auth.waitForEmailInput();
  await auth.enterEmail("hoaingo@astraler.com");
  await auth.clickSignUpWithEmail();

  await auth.waitForOtpInput();

  await page.pause();

  const otp = "123456";
  await auth.enterOtp(otp);

  await expect(page).toHaveURL(/learning/);
});
