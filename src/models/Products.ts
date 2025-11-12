export class Product {
  protected sku: string;
  protected name: string;
  protected price: number;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  /**
   * Returns a formatted string with the product's details
   */
  displayDetails(): string {
    return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price.toFixed(
      2
    )}`;
  }

  /**
   * Calculates the final price of the product with tax
   * Default tax rate is 10% (0.10)
   */
  getPriceWithTax(taxRate: number = 0.1): number {
    return this.price * (1 + taxRate);
  }
}
