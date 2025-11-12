import { Product } from "./Products.js";

export class DigitalProduct extends Product {
  fileSize: number;

  constructor(sku: string, name: string, price: number, fileSize: number) {
    super(sku, name, price);
    this.fileSize = fileSize;
  }

  /**
   * Getter method to return the formatted file size in megabytes
   */
  get formattedFileSize(): string {
    return `${this.fileSize} MB`;
  }

  /**
   * Override getPriceWithTax to return price with no tax
   * Digital products do not require tax
   */
  getPriceWithTax(): number {
    return this.price;
  }
}
