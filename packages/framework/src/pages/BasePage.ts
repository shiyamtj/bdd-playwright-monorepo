import { Page, Locator } from "@playwright/test";

/**
 * Base Page class
 * Provides common page interaction methods
 */
export class BasePage {
  constructor(protected page: Page) {}

  /**
   * Navigate to URL
   */
  public async navigateToUrl(url: string): Promise<void> {
    await this.page.goto(url);
  }

  /**
   * Get current page URL
   */
  public getCurrentUrl(): string {
    return this.page.url();
  }

  /**
   * Wait for element to be visible
   */
  public async waitForElement(selector: string): Promise<void> {
    await this.page.waitForSelector(selector, { state: "visible" });
  }

  /**
   * Click element
   */
  public async clickElement(
    locator: Locator,
    elementName: string,
  ): Promise<void> {
    await locator.click();
  }

  /**
   * Fill input field
   */
  public async fillText(
    locator: Locator,
    value: string,
    fieldName: string,
  ): Promise<void> {
    await locator.fill(value);
  }

  /**
   * Clear element
   */
  public async clearElement(
    locator: Locator,
    elementName: string,
  ): Promise<void> {
    await locator.clear();
  }

  /**
   * Get text content
   */
  public async getElementText(locator: Locator): Promise<string | null> {
    return await locator.textContent();
  }

  /**
   * Check if element is visible
   */
  public async isElementVisible(locator: Locator): Promise<boolean> {
    return await locator.isVisible();
  }

  /**
   * Navigate to URL (alias)
   */
  public async navigate(url: string): Promise<void> {
    await this.navigateToUrl(url);
  }

  /**
   * Click element by selector (alias)
   */
  public async click(selector: string): Promise<void> {
    await this.page.click(selector);
  }

  /**
   * Fill input field by selector (alias)
   */
  public async fill(selector: string, value: string): Promise<void> {
    await this.page.fill(selector, value);
  }

  /**
   * Get text content by selector (alias)
   */
  public async getText(selector: string): Promise<string> {
    return (await this.page.textContent(selector)) || "";
  }
}
