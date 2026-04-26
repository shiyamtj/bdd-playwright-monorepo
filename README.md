# BDD Playwright Monorepo

A monorepo containing a BDD test automation framework and a reference test implementation. Built with **CucumberJS**, **Playwright**, **TypeScript**, and **npm**.

## Overview

This monorepo consists of two main packages:

- **@automite/bdd-playwright-framework** - Reusable BDD testing framework
- **test-project** - Reference implementation demonstrating framework usage

## Project Structure

```
bdd-playwright-monorepo/
├── packages/
│   ├── framework/                    # BDD Playwright Framework package
│   │   ├── src/
│   │   │   ├── core/                 # Core framework components
│   │   │   │   ├── BaseWorld.ts      # Custom World class
│   │   │   │   ├── TestRunner.ts     # Test execution manager
│   │   │   │   └── hooks.ts          # Cucumber lifecycle hooks
│   │   │   ├── pages/                # Base Page class for POM
│   │   │   └── utils/                # Logging utility
│   │   ├── dist/                     # Compiled JavaScript
│   │   └── package.json
│   └── test-project/                 # Reference test implementation
│       ├── tests/
│       │   ├── features/             # Gherkin feature files
│       │   ├── steps/                # Step definitions
│       │   ├── pages/                # Page Object Models
│       │   ├── support/              # Cucumber support code
│       │   └── config/               # Test configuration
│       ├── .env                      # Environment variables
│       ├── cucumber.js               # Cucumber configuration
│       └── package.json
├── package.json                      # Root package configuration
├── tsconfig.json                     # TypeScript configuration
└── README.md                         # This file
```

## Packages

### @automite/bdd-playwright-framework

A reusable BDD test automation framework providing:

- **BaseWorld** - Custom Cucumber World class for scenario context
- **BasePage** - Base Page class for Page Object Model pattern
- **setupHooks** - Pre-configured Cucumber lifecycle hooks
- **Logger** - Simple logging utility
- **TestRunner** - Test execution manager

**Key Features:**

- TypeScript support for type-safe test code
- Browser lifecycle management via Playwright
- Extensible architecture for custom implementations
- Environment-based configuration

**Documentation:** See [packages/framework/README.md](packages/framework/README.md)

### test-project

Reference implementation demonstrating framework usage with SauceDemo application:

- **Feature files** - Gherkin scenarios for login, inventory, and cart
- **Step definitions** - Mapped to Playwright actions
- **Page objects** - LoginPage, InventoryPage implementations
- **Custom World** - Application-specific context
- **Test configuration** - Environment variables and Cucumber config

**Key Features:**

- Complete BDD test examples
- Page Object Model implementation
- HTML reporting with multiple-cucumber-html-reporter
- Concurrent test execution support
- Tag-based test organization (@smoke, @regression)

**Documentation:** See [packages/test-project/README.md](packages/test-project/README.md)

## Prerequisites

- **Node.js** (v20 or higher)
- **npm** package manager (v10 or higher)

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd bdd-playwright-monorepo
   ```

2. **Install dependencies using npm workspaces:**

   ```bash
   npm install
   ```

   This will install dependencies for both the framework and test-project packages.

3. **Set up environment variables for test-project:**

   ```bash
   cp packages/test-project/.env.example packages/test-project/.env
   ```

   Edit the `.env` file with your configuration (see test-project documentation).

## Development

### Build the framework

```bash
npm run build
```

### Build framework in watch mode

```bash
npm run build:watch
```

### Run tests

```bash
# Run all tests
npm run test

# Run smoke tests
npm run test:smoke

# Run regression tests
npm run test:regression

# Run concurrent tests
npm run test:concurrent
```

### Clean build artifacts and test results

```bash
npm run clean
```

### Generate test report

```bash
npm run report
```

## Root Scripts

- `npm run build` - Build the framework package
- `npm run build:watch` - Build framework in watch mode
- `npm run test` - Run all tests in test-project
- `npm run test:smoke` - Run smoke tests
- `npm run test:regression` - Run regression tests
- `npm run test:concurrent` - Run tests concurrently
- `npm run clean` - Clean all workspaces
- `npm run report` - Generate HTML report for test-project

## Package-Specific Scripts

### Framework Package

```bash
cd packages/framework
npm run build        # Build TypeScript to dist/
npm run dev          # Build in watch mode
npm run clean        # Remove dist/ directory
```

### Test Project Package

```bash
cd packages/test-project
npm run test                 # Run all Cucumber tests
npm run test:smoke           # Run smoke tests
npm run test:regression      # Run regression tests
npm run test:concurrent      # Run tests concurrently
npm run clean                # Clean test results and reports
npm run report               # Generate HTML report
```

## Environment Variables

### Framework Configuration

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

### Test Project Configuration

Test project specific environment variables (in `packages/test-project/.env`):

```bash
BASE_URL=https://www.saucedemo.com
VALID_USERNAME=standard_user
VALID_PASSWORD=secret_sauce
# ... additional test credentials
```

See [packages/test-project/README.md](packages/test-project/README.md) for complete configuration.

## Technology Stack

- **CucumberJS** - BDD test framework
- **Playwright** - Browser automation
- **TypeScript** - Type-safe JavaScript
- **npm Workspaces** - Monorepo management
- **multiple-cucumber-html-reporter** - HTML test reporting

## License

MIT

## Author

shiyamtj@gmail.com

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests for either the framework or test-project packages.

## Documentation

- [Framework Documentation](packages/framework/README.md) - Detailed framework API and usage
- [Test Project Documentation](packages/test-project/README.md) - Reference implementation guide
