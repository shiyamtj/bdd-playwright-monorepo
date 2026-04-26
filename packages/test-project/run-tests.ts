// run-tests.ts
// This TypeScript script loads environment variables (via dotenv) and runs multiple Cucumber test suites in batches.
// Uses TestRunner from @automite/bdd-playwright-framework

import { TestRunner } from "@automite/bdd-playwright-framework";

// Instantiate and run.
new TestRunner().run().catch((err: Error) => {
  console.error(err);
  process.exit(1);
});
