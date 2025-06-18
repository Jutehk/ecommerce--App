import { filterProducts, getUniqueCategories, getPriceRange } from '../filterUtils';

const mockProducts = [
  { id: 1, name: 'Product 1', price: 100, category: 'Electronics', rating: 4.5 },
  { id: 2, name: 'Product 2', price: 200, category: 'Clothing', rating: 3.8 },
  { id: 3, name: 'Product 3', price: 150, category: 'Electronics', rating: 4.9 },
  { id: 4, name: 'Product 4', price: 300, category: 'Home', rating: 4.2 }
];

describe('filterUtils', () => {
  describe('filterProducts', () => {
    it('should return all products when no filters applied', () => {
      const filters = { categories: [], priceRange: [0, 1000], rating: 0 };
      const result = filterProducts(mockProducts, filters, '');
      expect(result).toHaveLength(4);
    });

    it('should filter by category', () => {
      const filters = { categories: ['Electronics'], priceRange: [0, 1000], rating: 0 };
      const result = filterProducts(mockProducts, filters, '');
      expect(result).toHaveLength(2);
      expect(result.every(p => p.category === 'Electronics')).toBe(true);
    });

    it('should filter by price range', () => {
      const filters = { categories: [], priceRange: [100, 200], rating: 0 };
      const result = filterProducts(mockProducts, filters, '');
      expect(result).toHaveLength(3);
      expect(result.every(p => p.price >= 100 && p.price <= 200)).toBe(true);
    });

    it('should filter by rating', () => {
      const filters = { categories: [], priceRange: [0, 1000], rating: 4.0 };
      const result = filterProducts(mockProducts, filters, '');
      expect(result).toHaveLength(3);
      expect(result.every(p => p.rating >= 4.0)).toBe(true);
    });

    it('should sort by price low to high', () => {
      const filters = { categories: [], priceRange: [0, 1000], rating: 0 };
      const result = filterProducts(mockProducts, filters, 'price-low-high');
      expect(result[0].price).toBe(100);
      expect(result[result.length - 1].price).toBe(300);
    });

    it('should sort by price high to low', () => {
      const filters = { categories: [], priceRange: [0, 1000], rating: 0 };
      const result = filterProducts(mockProducts, filters, 'price-high-low');
      expect(result[0].price).toBe(300);
      expect(result[result.length - 1].price).toBe(100);
    });

    it('should sort by rating high to low', () => {
      const filters = { categories: [], priceRange: [0, 1000], rating: 0 };
      const result = filterProducts(mockProducts, filters, 'rating-high-low');
      expect(result[0].rating).toBe(4.9);
    });

    it('should apply multiple filters', () => {
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
  });

  describe('getUniqueCategories', () => {
    it('should return unique categories', () => {
      const result = getUniqueCategories(mockProducts);
      expect(result).toEqual(['Electronics', 'Clothing', 'Home']);
    });

    it('should handle empty array', () => {
      const result = getUniqueCategories([]);
      expect(result).toEqual([]);
    });
  });

  describe('getPriceRange', () => {
    it('should return min and max prices', () => {
      const result = getPriceRange(mockProducts);
      expect(result).toEqual([100, 300]);
    });

    it('should handle single product', () => {
      const result = getPriceRange([mockProducts[0]]);
      expect(result).toEqual([100, 100]);
    });
  });

  // Boundary Value Analysis Tests
  describe('Boundary Value Analysis', () => {
    it('should handle minimum price boundary', () => {
      const filters = { categories: [], priceRange: [0, 0], rating: 0 };
      const result = filterProducts(mockProducts, filters, '');
      expect(result).toHaveLength(0);
    });

    it('should handle maximum price boundary', () => {
      const filters = { categories: [], priceRange: [1000, 1000], rating: 0 };
      const result = filterProducts(mockProducts, filters, '');
      expect(result).toHaveLength(0);
    });

    it('should handle minimum rating boundary', () => {
      const filters = { categories: [], priceRange: [0, 1000], rating: 5.0 };
      const result = filterProducts(mockProducts, filters, '');
      expect(result).toHaveLength(0);
    });

    it('should handle exact price match', () => {
      const filters = { categories: [], priceRange: [100, 100], rating: 0 };
      const result = filterProducts(mockProducts, filters, '');
      expect(result).toHaveLength(1);
      expect(result[0].price).toBe(100);
    });
  });
});