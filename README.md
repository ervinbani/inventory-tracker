# Inventory Tracker

A TypeScript-based inventory management system demonstrating object-oriented programming principles including inheritance, polymorphism, and encapsulation.

## Features

- **Product Management**: Base class for all product types
- **Physical Products**: Products with weight and 10% tax
- **Digital Products**: Products with file size and no tax
- **Tax Calculator**: Utility for calculating prices with tax
- **Polymorphic Design**: Unified interface for different product types

## Project Structure

```
inventory-tracker/
├── src/
│   ├── models/
│   │   ├── Products.ts           # Base Product class
│   │   ├── PhysicalProducts.ts   # Physical product subclass
│   │   └── DigitalProducts.ts    # Digital product subclass
│   ├── utils/
│   │   └── taxCalculator.ts      # Tax calculation utility
│   └── main.ts                   # Main program
├── package.json
├── tsconfig.json
└── .gitignore
```

## Classes

### Product (Base Class)

- **Properties**: `sku`, `name`, `price`
- **Methods**:
  - `displayDetails()`: Returns formatted product information
  - `getPriceWithTax()`: Calculates price with tax (default 10%)

### PhysicalProduct (extends Product)

- **Additional Property**: `weight` (number)
- **Getter**: `formattedWeight` - Returns weight in kg format
- **Override**: `getPriceWithTax()` - Fixed 10% tax rate

### DigitalProduct (extends Product)

- **Additional Property**: `fileSize` (number)
- **Getter**: `formattedFileSize` - Returns file size in MB format
- **Override**: `getPriceWithTax()` - No tax applied

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ervinbani/inventory-tracker.git
cd inventory-tracker
```

2. Install dependencies:

```bash
npm install
```

## Usage

### Compile TypeScript

```bash
tsc
```

### Run the Application

```bash
node src/main.js
```

## Example Output

```
=== Inventory Tracker ===

SKU: PHY001, Name: Laptop, Price: $999.99
Price with Tax: $1099.99
Weight: 2.5 kg
---
SKU: PHY002, Name: Mechanical Keyboard, Price: $149.99
Price with Tax: $164.99
Weight: 1.2 kg
---
SKU: DIG001, Name: TypeScript Handbook, Price: $29.99
Price with Tax: $29.99
File Size: 15 MB
---
SKU: DIG002, Name: Photo Editor Pro, Price: $199.99
Price with Tax: $199.99
File Size: 500 MB
---
```

## Key Concepts Demonstrated

### Inheritance

- `PhysicalProduct` and `DigitalProduct` inherit from `Product`
- Subclasses extend base functionality with additional properties

### Polymorphism

- Products of different types stored in a single `Product[]` array
- Each subclass provides its own implementation of `getPriceWithTax()`
- Runtime determines which method to call based on object type

### Encapsulation

- Properties marked as `protected` in base class
- Getter methods provide controlled access to formatted data
- Each class manages its own specific logic

## Critical Thinking

### How does TypeScript enforce type safety in this object-oriented program?

TypeScript catches type errors at compile time through:

- **Strict typing** of properties (`sku: string`, `price: number`)
- **Method signatures** that enforce correct parameter and return types
- **Type checking** when storing subclasses in `Product[]` array
- **Compile-time validation** that prevents mismatched types before runtime

### How did inheritance reduce code duplication?

Both `PhysicalProduct` and `DigitalProduct` inherit shared functionality from `Product`:

- **Common properties** (`sku`, `name`, `price`) defined once in base class
- **Shared method** `displayDetails()` reused by all subclasses
- **Constructor logic** simplified using `super()` to initialize base properties
- Only **product-specific features** implemented in each subclass

### Benefits of using encapsulation and access modifiers

- **`protected` properties** allow subclass access while hiding internals from external code
- **Getter methods** (`formattedWeight`, `formattedFileSize`) control how data is presented
- **Information hiding** prevents direct modification of critical properties
- **Flexibility** to change internal implementation without breaking external code

### Adding a new product type (SubscriptionProduct)

Polymorphism makes extension straightforward:

1. **Create new class**: `class SubscriptionProduct extends Product`
2. **Add specific properties**: `duration`, `renewalDate`
3. **Override `getPriceWithTax()`**: Implement subscription-specific tax logic
4. **Use immediately**: Add to existing `Product[]` array without modifying loop or `calculateTax()` function
5. **No changes needed** to existing code - polymorphism handles the new type automatically
