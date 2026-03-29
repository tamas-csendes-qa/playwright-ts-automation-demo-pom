import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ConfirmationPage } from '../pages/ConfirmationPage';
import { UserFactory } from '../factories/user.factory';
import { ProductFactory } from '../factories/product.factory';
import { CheckoutFactory } from '../factories/checkout.factory';

test('User can complete a purchase from login to order confirmation', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const confirmationPage = new ConfirmationPage(page);

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

  expect(await confirmationPage.shippingInfo()).toContain('Free Pony Express Delivery!');
  expect(await confirmationPage.getItemTotal()).toContain('$15.99');
  expect(await confirmationPage.getTax()).toContain('$1.28');
  expect(await confirmationPage.getTotal()).toContain('$17.27');
  await confirmationPage.finish();
  expect(await confirmationPage.orderConfirmationText()).toBe('Thank you for your order!');
});
