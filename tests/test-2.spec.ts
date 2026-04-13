import { test, expect } from '@playwright/test';

test('GoogleTest', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page.getByRole('search')).toContainText('Google Search');
 
  await page.getByRole('link', { name: 'Terms' }).click();
  await expect(page.locator('#main-content')).toContainText('Effective May 22, 2024');
  await page.getByRole('link', { name: 'FAQ' }).click();

  await expect(page.locator('#main-content')).toContainText('How does Google protect my privacy and keep my information secure?');
  await page.getByRole('link', { name: 'Google Safety Center' }).click();
  await expect(page.getByRole('banner')).toContainText('Safety Center');
  await page.getByRole('link', { name: 'Explore product protections' }).click();
  await expect(page.locator('safety-landing-hero')).toContainText('Every product, safer in all kinds of ways');
  await page.getByRole('link', { name: 'Overview' }).click();
  await expect(page.getByRole('img', { name: 'Blue shield with white Google' })).toBeVisible();
  
});