import { test, expect } from "@playwright/test";
import { LandingPage } from "../../pages/landing.page";
import { OnboardingPage } from "../../pages/onboarding.page";

test("User can navigate to onboarding page", async ({ page }) => {
  const landing = new LandingPage(page);

  await landing.goto();
  await landing.clickTryForFreeButton();

  await expect(page).toHaveURL(/onboarding/);
});

test.describe("Onboarding Step 1", () => {
  test.beforeEach(async ({ page }) => {
    const landing = new LandingPage(page);
    await landing.goto();
    await landing.clickTryForFreeButton();
  });

  test("User can search for a state", async ({ page }) => {
    const onboarding = new OnboardingPage(page);
    await onboarding.clickSearchBox();
    await onboarding.fillSearchBox("New Mexico");

    await expect(onboarding.searchBox()).toHaveValue("New Mexico");
  });

  test("User can unselect a state when click two times", async ({ page }) => {
    const onboarding = new OnboardingPage(page);

    await onboarding.clickFirstStateRadio();
    await onboarding.clickFirstStateRadio();

    await expect(onboarding.firstStateRadio()).toBeChecked();
  });

  test("User can scroll states list", async ({ page }) => {
    const onboarding = new OnboardingPage(page);

    const targetState = onboarding.stateOption("New York");

    await page.mouse.wheel(0, 500);

    await expect(targetState).toBeVisible();
    await targetState.click();
  });

  test.only("User cannot proceed without selecting a state", async ({
    page,
  }) => {
    const onboarding = new OnboardingPage(page);

    await onboarding.clickContinueButton();

    await expect(onboarding.continueButton()).toBeDisabled();
  });
});
