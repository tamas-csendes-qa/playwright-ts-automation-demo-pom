import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { UserFactory } from '../factories/user.factory';
import { ProductFactory } from '../factories/product.factory';
import { CheckoutFactory } from '../factories/checkout.factory';

test('User can complete a purchase from login to order confirmation', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  const user = UserFactory.standardUser();
  const product = ProductFactory.sauceLabsBoltTShirt();

  await loginPage.navigate('/');
  await loginPage.login(user);

  await expect(page).toHaveURL(/inventory/);

  await inventoryPage.sortBy('Price (low to high)');
  await inventoryPage.addToCart(product);
  await inventoryPage.openCart();

  expect(await cartPage.getCartItemCount()).toBe(1);
  expect(await cartPage.getItemPrice(product)).toBe('$15.99');
  expect(await cartPage.expectItemInCart(product)).toBe('Sauce Labs Bolt T-Shirt');
  await cartPage.proceedToCheckout();

  await checkoutPage.fillForm(CheckoutFactory.validAddress());
  await checkoutPage.continue();
});
