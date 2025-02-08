Prerequisites:
- Before running the Playwright tests, install
- Node.js
- npm

Installation:
- Clone the repository:
- git clone 'your-repo-url'
- cd 'your-repo-name'

Install dependencies:
- npm install

Install Playwright browsers:
- npx playwright install

Install AJV JSON Schema Validator:
- npm install ajv

Running Tests:
To execute the Playwright tests, use the following commands:

Run all tests:
- npx playwright test

Run tests with UI:
- npx playwright test --ui

Run a specific test file:
- npx playwright test tests/example.spec.ts

Run tests in headed mode:
- npx playwright test --headed

Run tests in a specific browser:
- npx playwright test --browser=chromium

Viewing Test Reports:
After running tests, you can generate and open an HTML report:
- npx playwright show-report

Configuration:
- Playwright configuration can be modified in playwright.config.ts. Adjust settings such as test timeout, browser options, and test directory as needed.

Debugging Tests
Use the following command to debug a test:
- npx playwright test --debug

This opens Playwright Inspector, allowing step-by-step debugging.



