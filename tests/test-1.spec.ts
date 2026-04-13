import { test, expect } from '@playwright/test';
import * as path from 'path';
import { pathToFileURL } from 'url';

const indexFileUrl = pathToFileURL(path.resolve('docs/index.html')).href;

test('RecordTest', async ({ page }) => {
  await page.goto(indexFileUrl);
  await page.getByRole('link', { name: 'Get Started' }).click();
  await expect(page.locator('h1')).toContainText('Get Started');
  await page.getByRole('link', { name: 'FAQ page' }).click();
  await expect(page.locator('h1')).toContainText('Frequently Asked Questions');
  await page.getByRole('link', { name: 'Get Started page' }).click();
  await expect(page.locator('h1')).toContainText('Get Started');
  await page.getByRole('link', { name: 'FAQ', exact: true }).click();
  await page.getByRole('link', { name: 'About' }).click();
  await expect(page.locator('h1')).toContainText('About Us');
});
