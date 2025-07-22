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

  radioOption(name: string) {
    return this.page.getByRole("radio", { name });
  }

  numberButton(value: string) {
    return this.page.getByRole("button", { name: value });
  }

  dateOption(name: string) {
    return this.page.getByRole("button", { name });
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
