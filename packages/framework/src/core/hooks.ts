import {
  Before,
  After,
  BeforeAll,
  AfterAll,
  setWorldConstructor,
} from "@cucumber/cucumber";
import { chromium, Page, Browser, BrowserContext } from "@playwright/test";
import { BaseWorld } from "./BaseWorld";

/**
 * Setup framework hooks
 * Configures Cucumber lifecycle hooks with custom World class
 */
export function setupHooks(
  WorldClass: typeof BaseWorld,
  pageInitializer?: (page: Page, world: any) => void,
): void {
  let browser: Browser | undefined;
  let context: BrowserContext | undefined;

  // Set custom World constructor
  setWorldConstructor(WorldClass);

  BeforeAll(async () => {
    // Initialize browser before all tests
    const browserType = process.env.BROWSER === "firefox" ? chromium : chromium;
    browser = await browserType.launch({
      headless: process.env.HEADLESS !== "false",
    });
    context = await browser.newContext();
  });

  AfterAll(async () => {
    // Cleanup browser after all tests
    if (context) {
      await context.close();
    }
    if (browser) {
      await browser.close();
    }
  });

  Before(async function (this: BaseWorld) {
    // Initialize page before each scenario
    if (context) {
      this.page = await context.newPage();
      if (pageInitializer) {
        pageInitializer(this.page, this);
      }
    }
  });

  After(async function (this: BaseWorld) {
    // Cleanup after each scenario
    if (this.page) {
      await this.page.close();
    }
  });
}
