import { Page } from "@playwright/test";

export class OnboardingPage {
  constructor(public page: Page) {}

  searchBox() {
    return this.page.getByRole("textbox", { name: "Search" });
  }

  continueButton() {
    return this.page.getByRole("button", { name: "Continue" });
  }

  radioOption(name: string) {
    return this.page.getByRole("radio", { name });
  }

  headingText(text: string) {
    return this.page.getByRole("heading", { name: text });
  }

  firstRadio() {
    return this.page.getByRole("radio").first();
  }

  async focusSearchBox() {
    await this.searchBox().click();
  }

  async fillSearchBox(state: string) {
    await this.searchBox().fill(state);
  }

  async selectOption(name: string) {
    await this.radioOption(name).click();
  }

  async selectFirstRadio() {
    await this.firstRadio().click();
  }

  async clickContinueButton() {
    await this.continueButton().click();
  }
}
