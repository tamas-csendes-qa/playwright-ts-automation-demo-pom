import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { UserFactory } from '../factories/user.factory';

type MyFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate('/');
    await loginPage.login(UserFactory.standardUser());
    await expect(page).toHaveURL(/inventory/);
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';
