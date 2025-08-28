import { useState, useMemo } from "react";
import { Menu, SortAsc } from "lucide-react";
import { products } from "./data/products";
import { filterProducts, getUniqueCategories } from "./utils/filterUtils";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid";




function App() {
  const [filters, setFilters] = useState({
    categories: [] as string[],
    priceRange: [0, 1000] as [number, number],
    rating: 0,
  });
  const [sortBy, setSortBy] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const categories = useMemo(() => getUniqueCategories(products), []);

  const handleCategoryChange = (category: string) => {
    if (category === "CLEAR_ALL") {
      setFilters((prev) => ({ ...prev, categories: [] }));
      return;
    }

    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const handlePriceRangeChange = (range: [number, number]) => {
    setFilters((prev) => ({ ...prev, priceRange: range }));
  };

  const handleRatingChange = (rating: number) => {
    setFilters((prev) => ({ ...prev, rating }));
  };

  const filteredProducts = useMemo(() => {
    return filterProducts(products, filters, sortBy);
  }, [filters, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                🛍️ Modern E-Commerce Filter
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <SortAsc className="w-5 h-5 text-gray-600" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  data-testid="sort-dropdown"
                >
                  <option value="">Sort by</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="rating-high-low">Rating: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-80 flex-shrink-0">
            <Sidebar
              categories={categories}
              selectedCategories={filters.categories}
              onCategoryChange={handleCategoryChange}
              priceRange={filters.priceRange}
              onPriceRangeChange={handlePriceRangeChange}
              rating={filters.rating}
              onRatingChange={handleRatingChange}
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />
          </div>

          <div className="flex-1">
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <p className="text-gray-600">
                  Showing{" "}
                  <span className="font-semibold">
                    {filteredProducts?.length || 0}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold">{products?.length || 0}</span>{" "}
                  products
                </p>
              </div>
            </div>

            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
