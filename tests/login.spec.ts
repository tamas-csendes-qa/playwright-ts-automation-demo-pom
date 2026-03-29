import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { UserFactory } from '../factories/user.factory';

test('User can login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const user = UserFactory.standardUser();

  await loginPage.navigate('/');
  await loginPage.login(user);

  await expect(page).toHaveURL(/inventory/);
});

test('Locked out user cannot login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const user = UserFactory.lockedOutUser();

  await loginPage.navigate('/');
  await loginPage.login(user);

  await expect(page).not.toHaveURL(/inventory/);
});
