# 🧪 Unit Test Report – `filterUtils.js`

---

## 📋 Introduction

This report documents the unit testing conducted on the `filterUtils.js` module, which is responsible for filtering, sorting, and extracting utility data from the product catalog in the E-Commerce Filter App.

The goal of the test was to verify the correctness of the `filterProducts`, `getUniqueCategories`, and `getPriceRange` functions under various scenarios, including edge and boundary cases.

---

## 🧪 Testing Tools & Setup

- **Testing Framework**: Jest
- **File Tested**: `src/utils/__tests__/filterUtils.test.js`
- **Test Command**: `npm test`
- **Mock Data**: Array of sample product objects with `id`, `name`, `price`, `category`, and `rating`

---

## 🧾 Test Summary

### ✅ `filterProducts(products, filters, sortBy)`

| Test Case                               | Result  |
| --------------------------------------- | ------- |
| Returns all products with no filters    | ✅ Pass |
| Filters by category (`Electronics`)     | ✅ Pass |
| Filters by price range (`100–200`)      | ✅ Pass |
| Filters by rating (`>= 4.0`)            | ✅ Pass |
| Sorts by price (low to high)            | ✅ Pass |
| Sorts by price (high to low)            | ✅ Pass |
| Sorts by rating (high to low)           | ✅ Pass |
| Applies multiple filters simultaneously | ✅ Pass |

### ✅ `getUniqueCategories(products)`

| Test Case                  | Result  |
| -------------------------- | ------- |
| Returns unique categories  | ✅ Pass |
| Handles empty product list | ✅ Pass |

### ✅ `getPriceRange(products)`

| Test Case                  | Result  |
| -------------------------- | ------- |
| Returns min and max prices | ✅ Pass |
| Handles single product     | ✅ Pass |

### 🧪 Boundary Value Analysis

| Scenario                              | Result  |
| ------------------------------------- | ------- |
| Minimum price boundary `[0, 0]`       | ✅ Pass |
| Maximum price boundary `[1000, 1000]` | ✅ Pass |
| Minimum rating boundary `5.0`         | ✅ Pass |
| Exact price match `price = 100`       | ✅ Pass |

---

## 🧾 Sample Output (Terminal)

---

## 🧠 Reflection

The `filterUtils.js` utility functions have passed all unit tests, including standard use cases and boundary scenarios. This indicates strong reliability and correctness in filtering, sorting, and extracting category and pricing information. The utility is ready for integration and further extension in the E-Commerce Filter App.

---
