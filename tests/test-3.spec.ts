import { test, expect } from '@playwright/test';

test('StackoverflowTest', async ({ page }) => {
  await page.goto('https://stackoverflow.com/questions');
  await expect(page.locator('#mainbar')).toMatchAriaSnapshot(`- text: /\\d+,\\d+,\\d+ questions/`);
  await expect(page.locator('#mainbar')).toContainText('questions');
});