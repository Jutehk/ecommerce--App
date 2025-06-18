import { Product } from '../data/products';

export interface Filters {
  categories: string[];
  priceRange: [number, number];
  rating: number;
}

/**
 * Filters and sorts products.
 */
export function filterProducts(
  products: Product[],
  filters: Filters,
  sortBy: string
): Product[] {
  let result = [...products];

  // Filter by categories
  if (filters.categories.length > 0) {
    result = result.filter(p => filters.categories.includes(p.category));
  }

  // Filter by price range
  result = result.filter(
    p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
  );

  // Filter by rating
  if (filters.rating > 0) {
    result = result.filter(p => p.rating >= filters.rating);
  }

  // Sort products
  switch (sortBy) {
    case 'price-low-high':
      result.sort((a, b) => a.price - b.price);
      break;
    case 'price-high-low':
      result.sort((a, b) => b.price - a.price);
      break;
    case 'rating-high-low':
      result.sort((a, b) => b.rating - a.rating);
      break;
  }

  return result;
}

/**
 * Returns a list of unique product categories.
 */
export function getUniqueCategories(products: Product[]): string[] {
  const set = new Set<string>();
  products.forEach(p => set.add(p.category));
  return Array.from(set);
}

/**
 * Returns [minPrice, maxPrice] from product list.
 */
export function getPriceRange(products: Product[]): [number, number] {
  const prices = products.map(p => p.price);
  return [Math.min(...prices), Math.max(...prices)];
}
