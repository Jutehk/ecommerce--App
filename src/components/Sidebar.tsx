import React from 'react';
import { Filter, Star } from 'lucide-react';

interface SidebarProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  rating: number;
  onRatingChange: (rating: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  categories,
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  rating,
  onRatingChange,
  isOpen,
  onClose
}) => {
  const handlePriceChange = (index: number, value: string) => {
    const newRange: [number, number] = [...priceRange];
    newRange[index] = parseInt(value) || 0;
    onPriceRangeChange(newRange);
  };

  const renderRatingFilter = () => {
    const ratings = [5, 4, 3];
    return ratings.map((r) => (
      <label key={r} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
        <input
          type="radio"
          name="rating"
          value={r}
          checked={rating === r}
          onChange={() => onRatingChange(r)}
          className="text-blue-600 focus:ring-blue-500"
          data-testid={`rating-${r}`}
        />
        <div className="flex items-center gap-1">
          {[...Array(r)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-sm text-gray-600">& up</span>
        </div>
      </label>
    ));
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <div className={`
        fixed lg:sticky top-0 left-0 h-screen lg:h-auto w-80 lg:w-auto
        bg-white shadow-xl lg:shadow-md rounded-r-xl lg:rounded-xl
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto
      `}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="font-medium text-gray-900 mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => onCategoryChange(category)}
                    className="rounded text-blue-600 focus:ring-blue-500"
                    data-testid={`category-${category.toLowerCase()}`}
                  />
                  <span className="text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-8">
            <h3 className="font-medium text-gray-900 mb-4">Price Range</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Min</label>
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange(0, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    min="0"
                    max="1000"
                    data-testid="price-min"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Max</label>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(1, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    min="0"
                    max="1000"
                    data-testid="price-max"
                  />
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(1, e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                data-testid="price-slider"
              />
            </div>
          </div>

          {/* Rating */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-4">Minimum Rating</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <input
                  type="radio"
                  name="rating"
                  value={0}
                  checked={rating === 0}
                  onChange={() => onRatingChange(0)}
                  className="text-blue-600 focus:ring-blue-500"
                  data-testid="rating-all"
                />
                <span className="text-gray-700">All Ratings</span>
              </label>
              {renderRatingFilter()}
            </div>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => {
              onCategoryChange('CLEAR_ALL');
              onPriceRangeChange([0, 1000]);
              onRatingChange(0);
            }}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors duration-200"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;