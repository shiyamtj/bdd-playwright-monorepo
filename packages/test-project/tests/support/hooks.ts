import { Page } from "@playwright/test";
import { setupHooks } from "@automite/bdd-playwright-framework";
import { CustomWorld } from "./CustomWorld";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

/**
 * Setup framework hooks with custom World class and page object initialization
 */
setupHooks(CustomWorld, (page: Page, world: any) => {
  // Initialize application-specific page objects
  world.loginPage = new LoginPage(page);
  world.inventoryPage = new InventoryPage(page);
});
