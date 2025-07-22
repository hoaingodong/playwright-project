import { test, expect } from "@playwright/test";
import { LandingPage } from "../../pages/landing.page";
import { AuthPage } from "../../pages/auth.page";

test("User can navigate to login page", async ({ page }) => {
  const landing = new LandingPage(page);
  const auth = new AuthPage(page);

  await landing.goto();
  await landing.clickLogin();

  await expect(auth.emailInput()).toBeVisible();
});
