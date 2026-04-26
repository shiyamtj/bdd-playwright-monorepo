import { IWorldOptions, World } from "@cucumber/cucumber";
import { Page } from "@playwright/test";

/**
 * Base World class for Cucumber
 * Provides browser context and page management
 */
export class BaseWorld extends World {
  public page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }

  /**
   * Initialize the page object
   */
  public async initPage(): Promise<void> {
    // Page initialization logic
    // This will be implemented based on framework needs
  }

  /**
   * Clean up resources after scenario
   */
  public async cleanup(): Promise<void> {
    // Cleanup logic - page is closed in hooks
  }
}
