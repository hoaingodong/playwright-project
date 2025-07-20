import { test, expect } from "@playwright/test";
import { LandingPage } from "../../pages/landing.page";
import { AuthPage } from "../../pages/auth.page";

test.describe("Social Login Buttons", () => {
  test.beforeEach(async ({ page }) => {
    const landing = new LandingPage(page);
    await landing.goto();
    await landing.clickLogin();
  });

  test("Google, Facebook, and Apple login buttons are visible", async ({
    page,
  }) => {
    const auth = new AuthPage(page);

    await expect(auth.googleButton()).toBeVisible();
    await expect(auth.facebookButton()).toBeVisible();
    await expect(auth.appleButton()).toBeVisible();
  });

  test("Clicking Google login navigates to Google OAuth", async ({ page }) => {
    const auth = new AuthPage(page);

    await auth.clickGoogleLogin();
    await auth.page
      .locator("div")
      .filter({ hasText: "Sign in with GoogleSign into" })
      .first()
      .click();
  });

  test("Clicking Facebook login navigates to Facebook OAuth", async ({
    page,
  }) => {
    const auth = new AuthPage(page);

    await auth.clickFacebookLogin();
    await expect(page).toHaveURL(/facebook\.com/); 
  });

  test("Clicking Apple login navigates to Apple OAuth", async ({ page }) => {
    const auth = new AuthPage(page);

    await auth.clickAppleLogin();
    await expect(page).toHaveURL(/appleid\.apple\.com/); 
  });
});
