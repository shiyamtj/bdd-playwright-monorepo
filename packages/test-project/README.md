# Test Project

BDD test automation implementation demonstrating the use of **@automite/bdd-playwright-framework**. This project provides a complete example of writing automated tests using CucumberJS, Playwright, and TypeScript with the SauceDemo application as the test target.

## Overview

This test project serves as a reference implementation for the BDD Playwright Framework. It includes:

- **Gherkin feature files** for test scenarios
- **Step definitions** mapping Gherkin steps to Playwright actions
- **Page Object Models** for UI interaction abstraction
- **Custom World** for scenario context management
- **Test configuration** via environment variables
- **HTML reporting** for test results

## Project Structure

```
test-project/
├── tests/
│   ├── features/              # Gherkin feature files
│   │   ├── login.feature
│   │   ├── inventory.feature
│   │   └── cart.feature
│   ├── steps/                 # Step definitions
│   │   ├── login.steps.ts
│   │   ├── inventory.steps.ts
│   │   └── cart.steps.ts
│   ├── pages/                 # Page Object Models
│   │   ├── BasePage.ts
│   │   ├── LoginPage.ts
│   │   └── InventoryPage.ts
│   ├── support/               # Cucumber support code
│   │   ├── CustomWorld.ts
│   │   └── hooks.ts
│   ├── config/                # Test configuration
│   │   └── index.ts
├── .env                       # Environment variables (local)
├── .env.example               # Environment variables template
├── cucumber.js                # Cucumber configuration
├── generate-report.js         # HTML report generation
├── run-tests.ts               # Concurrent test execution
├── run-commands-smoke.json    # Smoke test configuration
├── run-commands-regression.json # Regression test configuration
├── package.json
├── tsconfig.json
└── README.md
```

## Prerequisites

- **Node.js** (v20 or higher)
- **npm** package manager (v10 or higher)
- **@automite/bdd-playwright-framework** (local package)

## Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

   This will automatically install Playwright browsers via the `postinstall` script.

2. **Set up environment variables:**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your configuration (see Environment Variables section).

## Running Tests

### Run all tests

```bash
npm run test
```

### Run smoke tests

```bash
npm run test:smoke
```

### Run regression tests

```bash
npm run test:regression
```

### Run concurrent tests

```bash
npm run test:concurrent
```

### Clean test results

```bash
npm run clean
```

### Generate HTML report

```bash
npm run report
```

## Test Scenarios

### Login Feature

Tests for the SauceDemo login functionality:

- Successful login with valid credentials
- Failed login with invalid credentials
- Login with locked out user

### Inventory Feature

Tests for the inventory page:

- View inventory items
- Add items to cart
- Filter inventory items

### Cart Feature

Tests for the shopping cart:

- View cart contents
- Remove items from cart
- Continue to checkout

## Environment Variables

Configure the test project using the `.env` file:

```bash
# Application configuration
BASE_URL=https://www.saucedemo.com

# Browser configuration
BROWSER=chromium
HEADLESS=true
SLOW_MO=0
VIEWPORT_WIDTH=1280
VIEWPORT_HEIGHT=720
VIEWPORT_PRESET=desktop

# Timeouts
NAVIGATION_TIMEOUT=30000
ACTION_TIMEOUT=10000

# Test credentials
VALID_USERNAME=standard_user
VALID_PASSWORD=secret_sauce
LOCKED_USERNAME=locked_out_user
PROBLEM_USERNAME=problem_user
PERFORMANCE_USERNAME=performance_glitch_user

# Tracing
ENABLE_TRACING=false
```

## Page Objects

### BasePage

Base class for all page objects, providing common interaction methods:

```typescript
import { BasePage } from "@automite/bdd-playwright-framework";

class CustomPage extends BasePage {
  // Extend with page-specific methods
}
```

### LoginPage

Handles login page interactions:

- `goto()` - Navigate to login page
- `fillUsername(username)` - Enter username
- `fillPassword(password)` - Enter password
- `clickLoginButton()` - Submit login form
- `isErrorMessageDisplayed()` - Check for error message

### InventoryPage

Handles inventory page interactions:

- `goto()` - Navigate to inventory page
- `getInventoryItems()` - Get list of inventory items
- `addItemToCart(itemName)` - Add item to cart
- `getCartCount()` - Get cart item count

## Step Definitions

Step definitions are organized by feature and located in `tests/steps/`:

```typescript
import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/CustomWorld";

Given(
  "I navigate to the SauceDemo login page",
  async function (this: CustomWorld) {
    await this.loginPage.goto();
  },
);

When(
  "I enter username {string}",
  async function (this: CustomWorld, username: string) {
    await this.loginPage.fillUsername(username);
  },
);
```

## Custom World

The `CustomWorld` class extends the framework's `BaseWorld` and provides access to page objects:

```typescript
export class CustomWorld extends BaseWorld {
  public loginPage!: LoginPage;
  public inventoryPage!: InventoryPage;
}
```

Page objects are initialized in `tests/support/hooks.ts` and available in step definitions via `this`.

## Cucumber Configuration

Cucumber is configured in `cucumber.js`:

```javascript
module.exports = {
  default: {
    paths: ["tests/features/**/*.feature"],
    require: ["tests/support/**/*.ts", "tests/steps/**/*.ts"],
    requireModule: ["ts-node/register"],
    parallel: 0,
    dryRun: false,
    failFast: false,
    strict: true,
    retry: 0,
  },
};
```

## Reporting

Test reports are generated using `multiple-cucumber-html-reporter`:

```bash
yarn report
```

Reports are generated in the `reports/` directory with:

- HTML report with test results
- Screenshots on failure
- Execution timeline
- Feature and scenario statistics

## Concurrent Testing

For parallel test execution, use:

```bash
yarn test:concurrent
```

This uses `run-tests.ts` to execute tests in parallel based on configuration files:

- `run-commands-smoke.json` - Smoke test configuration
- `run-commands-regression.json` - Regression test configuration

## Development

### Adding New Tests

1. **Create feature file** in `tests/features/`
2. **Create page object** in `tests/pages/` (if new page)
3. **Create step definitions** in `tests/steps/`
4. **Update CustomWorld** in `tests/support/CustomWorld.ts` (if new page)
5. **Update hooks** in `tests/support/hooks.ts` (if new page)

### Tag Conventions

- `@smoke` - Critical path tests
- `@regression` - Full test suite
- `@login` - Login-related tests
- `@inventory` - Inventory-related tests
- `@cart` - Cart-related tests

## Scripts

- `npm run test` - Run all Cucumber tests
- `npm run test:smoke` - Run smoke tests (@smoke tag)
- `npm run test:regression` - Run regression tests (@regression tag)
- `npm run test:concurrent` - Run tests concurrently
- `npm run clean` - Clean test results and reports
- `npm run report` - Generate HTML report
- `npm run uninstall-browsers` - Uninstall Playwright browsers

## Dependencies

- `@automite/bdd-playwright-framework`: \* (local package)
- `@cucumber/cucumber`: ^9.5.1
- `@playwright/test`: ^1.40.1
- `multiple-cucumber-html-reporter`: ^3.10.0 (dev)

## Troubleshooting

### Browser Installation Issues

If browsers fail to install:

```bash
npx playwright install
```

### Timeout Errors

Increase timeouts in `.env`:

```bash
NAVIGATION_TIMEOUT=60000
ACTION_TIMEOUT=20000
```

### Debug Mode

Run tests in headed mode:

```bash
HEADLESS=false npm run test
```

## License

MIT

## Author

shiyamtj@gmail.com

## Framework Documentation

For framework documentation, see: [packages/framework/README.md](../framework/README.md)
