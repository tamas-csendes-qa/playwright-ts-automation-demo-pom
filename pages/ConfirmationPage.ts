import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ConfirmationPage extends BasePage {
  private shippingInformation = this.page.locator('[data-test="shipping-info-value"]');
  private priceTotal = this.page.locator('[data-test="subtotal-label"]');
  private taxPrice = this.page.locator('[data-test="tax-label"]');
  private totalPrice = this.page.locator('[data-test="total-label"]');
  private finishButton = this.page.locator('[data-test="finish"]');
  private cancelButton = this.page.locator('[data-test="cancel"]');
  private backHomeButton = this.page.locator('[data-test="back-to-products"]');
  private orderConfirmation = this.page.locator('[data-test="complete-header"]');

  constructor(page: Page) {
    super(page);
  }

  async shippingInfo(): Promise<string | null> {
    return await this.shippingInformation.textContent();
  }

  async getItemTotal(): Promise<string | null> {
    return await this.priceTotal.textContent();
  }

  async getTax(): Promise<string | null> {
    return await this.taxPrice.textContent();
  }

  async getTotal(): Promise<string | null> {
    return await this.totalPrice.textContent();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  async finish() {
    await this.finishButton.click();
  }

  async backHome() {
    await this.backHomeButton.click();
  }

  async orderConfirmationText(): Promise<string | null> {
    return await this.orderConfirmation.textContent();
  }
}
