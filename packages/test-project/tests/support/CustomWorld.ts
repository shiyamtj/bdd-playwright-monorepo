import { IWorldOptions } from "@cucumber/cucumber";
import { BaseWorld } from "@automite/bdd-playwright-framework";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

/**
 * Custom World class for Cucumber
 * Extends framework's BaseWorld to provide application-specific page objects
 * accessible via `this` in step definitions
 */
export class CustomWorld extends BaseWorld {
  public loginPage!: LoginPage;
  public inventoryPage!: InventoryPage;

  constructor(options: IWorldOptions) {
    super(options);
  }
}
