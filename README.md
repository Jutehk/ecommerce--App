# 🛍️ Modern E-Commerce Product Filter

A modern, responsive e-commerce product filtering application built with React, TypeScript, and Tailwind CSS. This application demonstrates advanced filtering capabilities, responsive design, and comprehensive testing strategies.

# Live demo :https://ecommercefilterapp.netlify.app/

## Features

### 🎯 Core Functionality
- **Product Display**: Grid layout showcasing 15 sample products with images, names, prices, categories, and star ratings
- **Advanced Filtering**:
  - Multi-select category filter (Electronics, Clothing, Home, Sports)
  - Price range filter with slider and input controls (0-1000)
  - Rating filter (3+, 4+, 5 stars)
- **Sorting Options**: 
  - Price: Low to High
  - Price: High to Low
  - Rating: High to Low
- **Responsive Design**: Mobile-first approach with collapsible sidebar
- **Real-time Updates**: Instant filtering and sorting without page reloads

### 🎨 Design Features
- Modern gradient backgrounds and card designs
- Smooth animations and hover effects
- Clean sidebar layout with intuitive controls
- Responsive grid (1-4 columns based on screen size)
- Premium color scheme with proper contrast ratios
- Star rating system with visual feedback

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom components
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Testing**: Cypress (E2E), Jest (Unit)
- **Linting**: ESLint with TypeScript support

## Project Structure

```
src/
├── components/
│   ├── ProductCard.tsx      # Individual product display
│   ├── ProductGrid.tsx      # Products grid layout
│   └── Sidebar.tsx          # Filter sidebar
├── data/
│   └── products.js          # Sample product data
├── utils/
│   ├── filterUtils.js       # Filter logic (for white-box testing)
│   └── __tests__/
│       └── filterUtils.test.js
├── test/
│   └── setup.js            # Jest test setup
└── App.tsx                 # Main application component

cypress/
└── e2e/
    └── filter.cy.js        # End-to-end tests
```

## Testing Strategy

This project implements comprehensive testing using multiple testing techniques:

### 1. Functional Testing
- **End-to-End Tests** with Cypress
- Tests cover all user workflows and interactions
- Validates complete application functionality

### 2. Boundary Value Analysis (BVA)
- **Price Range Testing**: Min/Max boundaries (0, 1000)
- **Rating Boundaries**: Edge cases for rating filters
- **Invalid Input Handling**: Negative values, out-of-range inputs

### 3. Decision Table Testing
- **Filter Combinations**: All possible filter combinations
- **Category + Price + Rating**: Complex filtering scenarios
- **Sort + Filter**: Combined operations testing

### 4. White-Box Testing with Jest
- **Unit Tests** for `filterUtils.js`
- **Code Coverage**: Tests all logical branches
- **Pure Function Testing**: Isolated logic testing

## Test Coverage

### Cypress E2E Tests
- ✅ Initial product rendering
- ✅ Category filtering (single and multiple)
- ✅ Price range filtering (slider and inputs)
- ✅ Rating filtering (all rating levels)
- ✅ Sorting functionality
- ✅ Combined filter operations
- ✅ Responsive design testing
- ✅ Mobile sidebar functionality
- ✅ Boundary value testing
- ✅ Clear filters functionality

### Jest Unit Tests
- ✅ Filter logic validation
- ✅ Sort functionality
- ✅ Utility function testing
- ✅ Edge case handling
- ✅ Boundary value analysis

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-product-filter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:5173`

## Running Tests

### End-to-End Tests (Cypress)
```bash
# Open Cypress Test Runner
npm run cypress:open

# Run Cypress headlessly
npm run cypress:run
```

### Unit Tests (Jest)
```bash
# Run Jest tests
npm test

# Run with coverage
npm test -- --coverage
```

### Linting
```bash
npm run lint
```

## Build for Production

```bash
npm run build
```

## Testing Techniques Explained

### 1. Functional Testing
Validates that the application meets all specified requirements:
- All filtering options work correctly
- Sorting functions properly
- UI responds appropriately to user interactions

### 2. Boundary Value Analysis (BVA)
Tests edge cases and boundaries:
- **Price Range**: 0, 1, 999, 1000
- **Rating**: 0, 3, 4, 5
- **Product Count**: Empty results, maximum results

### 3. Decision Table Testing
Systematic testing of all possible input combinations:
```
| Category | Price Range | Rating | Expected Result |
|----------|-------------|--------|-----------------|
| All      | 0-1000     | Any    | All products    |
| Electronics | 0-200   | 4+     | Filtered set    |
| None     | 500-600    | 5      | Specific matches|
```

### 4. White-Box Testing
Tests internal logic and code paths:
- **filterProducts()**: All conditional branches
- **getUniqueCategories()**: Array processing logic
- **getPriceRange()**: Mathematical operations

## Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Considerations

- **Memoized Filtering**: Uses React.useMemo for expensive calculations
- **Optimized Re-renders**: Efficient state management
- **Image Optimization**: External CDN images with proper sizing
- **Bundle Size**: Minimal dependencies for fast loading

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

## License

MIT License - feel free to use this project for learning and development purposes.

---

**Made with ❤️ using React, TypeScript, and Tailwind CSS**
