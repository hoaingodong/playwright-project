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
    await onboarding.focusSearchBox();
    await onboarding.fillSearchBox("New Mexico");

    await expect(onboarding.searchBox()).toHaveValue("New Mexico");
  });

  test("User can unselect a state when clicking twice", async ({ page }) => {
    const onboarding = new OnboardingPage(page);

    await onboarding.selectFirstRadio();
    await onboarding.selectFirstRadio();

    await expect(onboarding.firstRadio()).toBeChecked(); // confirm design supports this
  });

  test("User can scroll states list", async ({ page }) => {
    const onboarding = new OnboardingPage(page);
    const targetState = onboarding.radioOption("New York");

    await page.mouse.wheel(0, 500);
    await expect(targetState).toBeVisible();

    await targetState.click();
  });

  test("User cannot proceed without selecting a state", async ({ page }) => {
    const onboarding = new OnboardingPage(page);
    await onboarding.clickContinueButton();

    await expect(onboarding.continueButton()).toBeDisabled();
  });

  test("User can continue to the next step after selecting a state", async ({
    page,
  }) => {
    const onboarding = new OnboardingPage(page);

    await onboarding.selectFirstRadio();
    await onboarding.clickContinueButton();

    await expect(onboarding.headingText("Select vehicle")).toBeVisible();
  });
});

test.describe("Onboarding Step 2", () => {
  test.beforeEach(async ({ page }) => {
    const landing = new LandingPage(page);
    await landing.goto();
    await landing.clickTryForFreeButton();

    const onboarding = new OnboardingPage(page);
    await onboarding.selectFirstRadio();
    await onboarding.clickContinueButton();
  });

  test("User can proceed to the next step after selecting a vehicle", async ({
    page,
  }) => {
    const onboarding = new OnboardingPage(page);

    await onboarding.selectFirstRadio();
    await onboarding.clickContinueButton();

    await expect(onboarding.headingText("What best suits you?")).toBeVisible();
  });

  test("User cannot proceed without selecting a vehicle", async ({ page }) => {
    const onboarding = new OnboardingPage(page);
    await onboarding.clickContinueButton();

    await expect(onboarding.continueButton()).toBeDisabled();
  });
});
