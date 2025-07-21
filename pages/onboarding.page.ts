import { Page } from "@playwright/test";

export class OnboardingPage {
  constructor(public page: Page) {}

  searchBox() {
    return this.page.getByRole("textbox", { name: "Search" });
  }

  stateOption(name: string) {
    return this.page.getByRole("radio", { name });
  }

  continueButton() {
    return this.page.getByRole("button", { name: "Continue" });
  }

  licenseTitle(name: string) {
    return this.page.getByTitle(name);
  }

  licenseTypeText(name: string) {
    return this.page.getByText(name);
  }

  radioOption(name: string) {
    return this.page.getByRole("radio", { name });
  }

  questionText(text: string) {
    return this.page.getByText(text);
  }

  numberButton(value: string) {
    return this.page.getByRole("button", { name: value });
  }

  pickDateButton() {
    return this.page.getByRole("button", { name: "Pick a date" });
  }

  dateOption(name: string) {
    return this.page.getByRole("button", { name });
  }

  readyButton() {
    return this.page.getByRole("button", { name: "I'm ready" });
  }

  commitmentLabel() {
    return this.page.locator("label").filter({ hasText: "10 min / day" });
  }

  committedButton() {
    return this.page.getByRole("button", { name: "I‘m Committed" });
  }

  emailBox() {
    return this.page.getByRole("textbox", { name: "Email" });
  }

  headingText(text: string) {
    return this.page.getByRole("heading", { name: text });
  }

  firstStateRadio() {
    return this.page.getByRole("radio").first();
  }

  async clickSearchBox() {
    return this.searchBox().click();
  }

  async fillSearchBox(state: string) {
    await this.searchBox().fill(state);
  }

  async clickStateOption(name: string) {
    await this.stateOption(name).click();
  }

  async clickFirstStateRadio() {
    await this.firstStateRadio().click();
  }

  async clickContinueButton() {
    await this.continueButton().click();
  }
}
