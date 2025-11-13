import { Product } from "./models/Products.js";
import { PhysicalProduct } from "./models/PhysicalProducts.js";
import { DigitalProduct } from "./models/DigitalProducts.js";
import { calculateTax } from "./utils/taxCalculator.js";

// Create instances of PhysicalProduct
const laptop = new PhysicalProduct("PHY001", "Laptop", 999.99, 2.5);
const keyboard = new PhysicalProduct(
  "PHY002",
  "Mechanical Keyboard",
  149.99,
  1.2
);

// Create instances of DigitalProduct
const ebook = new DigitalProduct("DIG001", "TypeScript Handbook", 29.99, 15);
const software = new DigitalProduct("DIG002", "Photo Editor Pro", 199.99, 500);

// Use polymorphism: store all products in an array of type Product
const products: Product[] = [laptop, keyboard, ebook, software];

// Display product details using polymorphism
console.log("=== Inventory Tracker ===\n");

for (const product of products) {
  console.log(product.displayDetails());

  // Calculate price with tax (polymorphic behavior)
  const priceWithTax = calculateTax(product);
  console.log(`Price with Tax: $${priceWithTax.toFixed(2)}`);

  // Display additional product-specific information
  if (product instanceof PhysicalProduct) {
    console.log(`Weight: ${product.formattedWeight}`);
  } else if (product instanceof DigitalProduct) {
    console.log(`File Size: ${product.formattedFileSize}`);
  }

  console.log("---");
}
