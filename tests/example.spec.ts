import { test, expect } from '@playwright/test';
import * as path from 'path';
import { pathToFileURL } from 'url';

const indexFileUrl = pathToFileURL(path.resolve('docs/index.html')).href;

test('has title', async ({ page }) => {
  await page.goto(indexFileUrl);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home/);
});

test('get started link', async ({ page }) => {
  await page.goto(indexFileUrl);

  // Click the get started link.
  await page.getByRole('link', { name: 'Get Started' }).click();

  // Expects page to have a heading with the name of Installation.
await expect(page.getByRole('heading', { name: 'Get Started' })).toBeVisible();
});
