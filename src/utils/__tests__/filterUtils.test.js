/**
 * Jest Unit & Integration Tests for filterUtils
 * 
 * Maps to Test Cases:
 * TC01 - Filter by category
 * TC02 - Filter by price range
 * TC03 - Sort by Price High → Low
 * TC04 - Product count validation (indirectly covered via length checks)
 * TC05 - Product card details (partially covered with props validation)
 * TC08 - Boundary Value Analysis
 */

import { filterProducts, getUniqueCategories, getPriceRange } from '../filterUtils';

const mockProducts = [
  { id: 1, name: 'Product 1', price: 100, category: 'Electronics', rating: 4.5 },
  { id: 2, name: 'Product 2', price: 200, category: 'Clothing', rating: 3.8 },
  { id: 3, name: 'Product 3', price: 150, category: 'Electronics', rating: 4.9 },
  { id: 4, name: 'Product 4', price: 300, category: 'Home', rating: 4.2 }
];

describe('filterUtils', () => {
  describe('filterProducts', () => {
    it('returns all products when no filters applied (TC01)', () => {
      const filters = { categories: [], priceRange: [0, 1000], rating: 0 };
      const result = filterProducts(mockProducts, filters, '');
      expect(result).toHaveLength(4);
    });

    it('returns only products in the selected category (TC01)', () => {
      const filters = { categories: ['Electronics'], priceRange: [0, 1000], rating: 0 };
      const result = filterProducts(mockProducts, filters, '');
      expect(result).toHaveLength(2);
      expect(result.every(p => p.category === 'Electronics')).toBe(true);
    });

    it('returns products within the given price range (TC02)', () => {
      const filters = { categories: [], priceRange: [100, 200], rating: 0 };
      const result = filterProducts(mockProducts, filters, '');
      expect(result).toHaveLength(3);
      expect(result.every(p => p.price >= 100 && p.price <= 200)).toBe(true);
    });

    it('returns products with rating >= 4.0 (TC05)', () => {
      const filters = { categories: [], priceRange: [0, 1000], rating: 4.0 };
      const result = filterProducts(mockProducts, filters, '');
      expect(result).toHaveLength(3);
      expect(result.every(p => p.rating >= 4.0)).toBe(true);
    });

    it('sorts products by price low to high (TC03)', () => {
      const filters = { categories: [], priceRange: [0, 1000], rating: 0 };
      const result = filterProducts(mockProducts, filters, 'price-low-high');
      expect(result[0].price).toBe(100);
      expect(result[result.length - 1].price).toBe(300);
    });

    it('sorts products by price high to low (TC03)', () => {
      const filters = { categories: [], priceRange: [0, 1000], rating: 0 };
      const result = filterProducts(mockProducts, filters, 'price-high-low');
      expect(result[0].price).toBe(300);
      expect(result[result.length - 1].price).toBe(100);
    });

    it('sorts products by rating high to low (TC05)', () => {
      const filters = { categories: [], priceRange: [0, 1000], rating: 0 };
      const result = filterProducts(mockProducts, filters, 'rating-high-low');
      expect(result[0].rating).toBe(4.9);
    });

    it('applies multiple filters together (TC01, TC02, TC05)', () => {
      const filters = { categories: ['Electronics'], priceRange: [100, 200], rating: 4.0 };
      const result = filterProducts(mockProducts, filters, '');
      expect(result).toHaveLength(2);
      expect(result.every(p =>
        p.category === 'Electronics' &&
        p.price >= 100 &&
        p.price <= 200 &&
        p.rating >= 4.0
      )).toBe(true);
    });

    it('returns empty array when no products match filters', () => {
      const filters = { categories: ['Sports'], priceRange: [0, 50], rating: 5.0 };
      const result = filterProducts(mockProducts, filters, '');
      expect(result).toEqual([]);
    });

    it('handles null filters gracefully', () => {
      const result = filterProducts(mockProducts, null, '');
      expect(result).toEqual(mockProducts);
    });

    it('handles undefined filters gracefully', () => {
      const result = filterProducts(mockProducts, undefined, '');
      expect(result).toEqual(mockProducts);
    });
  });

  describe('getUniqueCategories', () => {
    it('returns unique categories (TC01)', () => {
      const result = getUniqueCategories(mockProducts);
      expect(result).toEqual(['Electronics', 'Clothing', 'Home']);
    });

    it('returns empty array when no products are given', () => {
      const result = getUniqueCategories([]);
      expect(result).toEqual([]);
    });
  });

  describe('getPriceRange', () => {
    it('returns min and max prices correctly (TC02)', () => {
      const result = getPriceRange(mockProducts);
      expect(result).toEqual([100, 300]);
    });

    it('returns same min/max when only one product exists', () => {
      const result = getPriceRange([mockProducts[0]]);
      expect(result).toEqual([100, 100]);
    });
  });

  // Boundary Value Analysis (TC08)
  describe('Boundary Value Analysis', () => {
    it('returns empty array when price range min and max are 0', () => {
      const filters = { categories: [], priceRange: [0, 0], rating: 0 };
      const result = filterProducts(mockProducts, filters, '');
      expect(result).toHaveLength(0);
    });

    it('returns empty array when price range is beyond max product price', () => {
      const filters = { categories: [], priceRange: [1000, 1000], rating: 0 };
      const result = filterProducts(mockProducts, filters, '');
      expect(result).toHaveLength(0);
    });

    it('returns empty array when rating boundary is too high', () => {
      const filters = { categories: [], priceRange: [0, 1000], rating: 5.0 };
      const result = filterProducts(mockProducts, filters, '');
      expect(result).toHaveLength(0);
    });

    it('returns product if price range matches exactly', () => {
      const filters = { categories: [], priceRange: [100, 100], rating: 0 };
      const result = filterProducts(mockProducts, filters, '');
      expect(result).toHaveLength(1);
      expect(result[0].price).toBe(100);
    });
  });
});
