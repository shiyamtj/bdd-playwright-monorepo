# BDD Playwright Framework Test

Test implementation demonstrating the use of **@automite/bdd-playwright-framework**. Built with **CucumberJS**, **Playwright**, **TypeScript**, and **Yarn**.

## Project Structure

```
bdd-playwright-framework-test/
├── tests/                            # Test implementation
│   ├── features/                     # Gherkin feature files
│   ├── steps/                        # Step definitions
│   ├── pages/                        # Page Object Models
│   ├── config/                       # Application-specific config
│   └── support/                      # Cucumber support code
├── package.json                      # Project configuration
├── .env.example                      # Environment variables template
└── README.md                          # This file
```

## Framework

This project uses the [@automite/bdd-playwright-framework](https://github.com/automite/bdd-playwright-framework) package.

For framework documentation, see: https://github.com/automite/bdd-playwright-framework

## Prerequisites

- **Node.js** (v16 or higher)
- **Yarn** package manager

## Installation

1. **Clone or navigate to the project:**

   ```bash
   cd bdd-playwright-framework-test
   ```

2. **Install dependencies using Yarn:**

   ```bash
   yarn install
   ```

3. **Set up environment variables:**

   ```bash
   cp .env.example .env
   ```

   The `.env` file includes:
   - `BASE_URL`: Target application URL (default: https://www.saucedemo.com)
   - `BROWSER`: Browser to use (chromium, firefox, webkit)
   - `HEADLESS`: Run browser in headless mode (true/false)
   - `SLOW_MO`: Slow down actions (in milliseconds)
   - Test credentials for the SauceDemo application

## Running Tests

### Run all tests

```bash
yarn test
```

### Run smoke tests

```bash
yarn test:smoke
```

### Run regression tests

```bash
yarn test:regression
```

### Run concurrent tests

```bash
yarn test:concurrent
```

### Clean test results

```bash
yarn clean
```

### Generate report

```bash
yarn report
```

## Scripts

- `yarn test` - Run all tests
- `yarn test:smoke` - Run smoke tests
- `yarn test:regression` - Run regression tests
- `yarn test:concurrent` - Run tests concurrently
- `yarn clean` - Clean test results and reports
- `yarn report` - Generate HTML report

## Environment Variables

Framework configuration via environment variables:

```bash
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

# Tracing
ENABLE_TRACING=false
```

## License

MIT

## Contributing

Feel free to extend the test implementation with additional features, page objects, and test scenarios.
