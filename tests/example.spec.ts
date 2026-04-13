import { test, expect } from '@playwright/test';
import path from 'path';

test('has title', async ({ page }) => {
  await page.goto(`file:///${path.resolve('src/TestSite1/index.html')}`);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home/);
});

test('get started link', async ({ page }) => {
  await page.goto(`file:///${path.resolve('src/TestSite1/index.html')}`);

  // Click the get started link.
  await page.getByRole('link', { name: 'Get Started' }).click();

  // Expects page to have a heading with the name of Installation.
await expect(page.getByRole('heading', { name: 'Get Started' })).toBeVisible();
});
