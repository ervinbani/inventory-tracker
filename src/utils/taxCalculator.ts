import { Product } from "../models/Products.js";

/**
 * Calculates the price of a product including tax
 * @param product - The product object to calculate tax for
 * @returns The price including tax
 */
export function calculateTax(product: Product): number {
  return product.getPriceWithTax();
}
