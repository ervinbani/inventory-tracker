import { Product } from "./Products";

export class PhysicalProduct extends Product {
  weight: number;

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight;
  }

  /**
   * Getter method to return the formatted weight in kilograms
   */
  get formattedWeight(): string {
    return `${this.weight} kg`;
  }

  /**
   * Override getPriceWithTax to calculate final price with 10% tax rate
   */
  getPriceWithTax(): number {
    return this.price * 1.1;
  }
}
