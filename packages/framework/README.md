# @automite/bdd-playwright-framework

A BDD (Behavior-Driven Development) test automation framework built with CucumberJS, Playwright, and TypeScript. This framework provides a solid foundation for writing maintainable, scalable automated tests using Gherkin syntax.

## Features

- **BDD Testing**: Write tests in Gherkin syntax using CucumberJS
- **Modern Browser Automation**: Powered by Playwright for reliable cross-browser testing
- **TypeScript Support**: Full TypeScript support for type-safe test code
- **Page Object Model**: Built-in BasePage class for implementing POM pattern
- **Custom World**: Extensible BaseWorld class for scenario context management
- **Lifecycle Hooks**: Pre-configured Cucumber hooks for test setup and teardown
- **Logging Utility**: Simple logging utility for test debugging
- **Configurable**: Environment-based configuration for flexible test execution

## Installation

```bash
yarn add @automite/bdd-playwright-framework
```

## Project Structure

```
framework/
├── src/
│   ├── core/
│   │   ├── BaseWorld.ts       # Custom World class for Cucumber
│   │   ├── TestRunner.ts      # Test execution manager
│   │   └── hooks.ts           # Cucumber lifecycle hooks
│   ├── pages/
│   │   └── BasePage.ts        # Base Page class for POM
│   ├── utils/
│   │   └── logger.ts          # Logging utility
│   └── index.ts               # Main entry point
├── dist/                      # Compiled JavaScript output
├── package.json
├── tsconfig.json
└── README.md
```

## Core Components

### BaseWorld

The `BaseWorld` class extends Cucumber's World class and provides scenario context management. It includes:

- Page object management
- Scenario initialization
- Resource cleanup

```typescript
import { BaseWorld } from '@automite/bdd-playwright-framework';

class CustomWorld extends BaseWorld {
  // Add custom scenario context
}
```

### BasePage

The `BasePage` class provides common page interaction methods:

- Navigation (`navigateToUrl`, `navigate`)
- Element interaction (`clickElement`, `fillText`, `clearElement`)
- Element verification (`waitForElement`, `isElementVisible`, `getElementText`)
- Selector-based shortcuts (`click`, `fill`, `getText`)

```typescript
import { BasePage } from '@automite/bdd-playwright-framework';

class LoginPage extends BasePage {
  async login(username: string, password: string) {
    await this.fill('#username', username);
    await this.fill('#password', password);
    await this.click('#login-button');
  }
}
```

### setupHooks

Configures Cucumber lifecycle hooks with browser management:

- `BeforeAll`: Launches browser and creates context
- `AfterAll`: Closes browser and context
- `Before`: Creates new page for each scenario
- `After`: Closes page after scenario

```typescript
import { setupHooks, BaseWorld } from '@automite/bdd-playwright-framework';

setupHooks(BaseWorld);
```

### Logger

Simple logging utility with multiple log levels:

```typescript
import { logger } from '@automite/bdd-playwright-framework';

logger.info('Information message');
logger.error('Error message');
logger.warn('Warning message');
logger.debug('Debug message'); // Only when DEBUG=true
```

## Usage

### Basic Setup

1. Create a custom World class:

```typescript
// tests/support/CustomWorld.ts
import { BaseWorld } from '@automite/bdd-playwright-framework';

export class CustomWorld extends BaseWorld {
  // Add custom properties and methods
}
```

2. Setup hooks in your support file:

```typescript
// tests/support/hooks.ts
import { setupHooks } from '@automite/bdd-playwright-framework';
import { CustomWorld } from './CustomWorld';

setupHooks(CustomWorld);
```

3. Create page objects:

```typescript
// tests/pages/LoginPage.ts
import { BasePage } from '@automite/bdd-playwright-framework';

export class LoginPage extends BasePage {
  async login(username: string, password: string) {
    await this.fill('#user-name', username);
    await this.fill('#password', password);
    await this.click('#login-button');
  }
}
```

4. Write step definitions:

```typescript
// tests/steps/login.steps.ts
import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/CustomWorld';
import { LoginPage } from '../pages/LoginPage';

Given('I am on the login page', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigateToUrl('https://example.com/login');
});

When('I enter credentials', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.login('user@example.com', 'password');
});
```

## Environment Variables

Configure the framework using environment variables:

```bash
# Browser configuration
BROWSER=chromium              # Browser type (chromium, firefox, webkit)
HEADLESS=true                 # Run in headless mode
SLOW_MO=0                     # Slow down actions (ms)
VIEWPORT_WIDTH=1280           # Viewport width
VIEWPORT_HEIGHT=720           # Viewport height
VIEWPORT_PRESET=desktop       # Viewport preset

# Timeouts
NAVIGATION_TIMEOUT=30000     # Navigation timeout (ms)
ACTION_TIMEOUT=10000         # Action timeout (ms)

# Debugging
DEBUG=true                    # Enable debug logs
ENABLE_TRACING=false          # Enable Playwright tracing
```

## Scripts

```bash
# Build the framework
yarn build

# Build in watch mode
yarn dev

# Clean build artifacts
yarn clean
```

## Dependencies

- `@cucumber/cucumber`: ^9.5.1
- `@playwright/test`: ^1.40.1

## Development

The framework is written in TypeScript and requires compilation before use:

```bash
yarn build
```

This compiles the TypeScript source files to the `dist` directory.

## License

MIT

## Author

shiyamtj@gmail.com

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.
