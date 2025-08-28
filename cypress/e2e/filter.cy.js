

describe("E-Commerce Product Filter", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  // ✅ Initial Load
  describe("Initial Load", () => {
    it("should display the app title", () => {
      cy.contains("🛍️ Modern E-Commerce Filter").should("be.visible");
    });

    it("should render product cards", () => {
      cy.get('[data-testid="product-card"]').should(
        "have.length.greaterThan",
        10
      );
    });

    it("should display all categories in sidebar", () => {
      cy.get('[data-testid="category-electronics"]').should("exist");
      cy.get('[data-testid="category-clothing"]').should("exist");
      cy.get('[data-testid="category-home"]').should("exist");
      cy.get('[data-testid="category-sports"]').should("exist");
    });

    it("should show correct initial product count", () => {
      cy.contains("Showing 15 of 15 products").should("be.visible");
    });
  });

  // ✅ Category Filtering
  describe("Category Filtering", () => {
    it("should filter products by Electronics category", () => {
      cy.get('[data-testid="category-electronics"]').click();
      cy.get('[data-testid="product-card"]').should("have.length", 4);
      cy.contains("Showing 4 of 15 products").should("be.visible");
    });

    it("should filter products by multiple categories", () => {
      cy.get('[data-testid="category-electronics"]').click();
      cy.get('[data-testid="category-clothing"]').click();
      cy.get('[data-testid="product-card"]').should("have.length", 8);
      cy.contains("Showing 8 of 15 products").should("be.visible");
    });

    it("should uncheck category and update results", () => {
      cy.get('[data-testid="category-electronics"]').click();
      cy.get('[data-testid="product-card"]').should("have.length", 4);

      cy.get('[data-testid="category-electronics"]').click();
      cy.get('[data-testid="product-card"]').should("have.length", 15);
    });
  });

  // ✅ Price Range
  describe("Price Range Filtering", () => {
    it("should filter products by price range using input fields", () => {
      cy.get('[data-testid="price-min"]').clear().type("100");
      cy.get('[data-testid="price-max"]').clear().type("200");
      cy.get('[data-testid="product-card"]').should("have.length.lessThan", 15);
    });

    it("should show no products when price range is too restrictive", () => {
      cy.get('[data-testid="price-min"]').clear().type("999");
      cy.get('[data-testid="price-max"]').clear().type("1000");
      cy.contains("No products found").should("be.visible");
    });
  });

  // ✅ Sorting
  describe("Sorting", () => {
    it("should sort products by price low to high", () => {
      cy.get('[data-testid="sort-dropdown"]').select("price-low-high");
      cy.get('[data-testid="product-card"]').first().should("contain", "$69");
    });

    it("should sort products by price high to low", () => {
      cy.get('[data-testid="sort-dropdown"]').select("price-high-low");
      cy.get('[data-testid="product-card"]').first().should("contain", "$399");
    });

    it("should sort products by rating high to low", () => {
      cy.get('[data-testid="sort-dropdown"]').select("rating-high-low");
      cy.get('[data-testid="product-card"]').first().should("be.visible");
    });
  });

  // ✅ Combined Filters
  describe("Combined Filtering", () => {
    it("should apply all filters together", () => {
      cy.get('[data-testid="category-electronics"]').click();
      cy.get('[data-testid="price-max"]').clear().type("300");
      cy.get('[data-testid="rating-4"]').click();
      cy.get('[data-testid="product-card"]').should(
        "have.length.greaterThan",
        0
      );
    });
  });

  // ✅ Responsive Design
  describe("Responsive Design", () => {
    it("should work on mobile viewport", () => {
      cy.viewport(375, 667);
      cy.get('[data-testid="product-card"]').should("be.visible");
      cy.contains("🛍️ Modern E-Commerce Filter").should("be.visible");
    });
  });

  // ✅ Boundary Value Analysis
  describe("Boundary Value Analysis", () => {
    it("should handle minimum price boundary (0)", () => {
      cy.get('[data-testid="price-min"]').clear().type("0");
      cy.get('[data-testid="price-max"]').clear().type("1");
      cy.get("body").should("contain.text", "products");
    });

    it("should handle maximum price boundary (1000)", () => {
      cy.get('[data-testid="price-min"]').clear().type("999");
      cy.get('[data-testid="price-max"]').clear().type("1000");
      cy.get("body").should("contain.text", "products");
    });

    it("should handle invalid price ranges", () => {
      cy.get('[data-testid="price-min"]').clear().type("500");
      cy.get('[data-testid="price-max"]').clear().type("100");
      cy.get("body").should("contain.text", "products");
    });
  });

  // ✅ Clear Filters
  describe("Clear Filters", () => {
    it("should clear all filters when clear button is clicked", () => {
      cy.get('[data-testid="category-electronics"]').click();
      cy.get('[data-testid="price-max"]').clear().type("200");
      cy.get('[data-testid="rating-4"]').click();
      cy.get('[data-testid="product-card"]').should("have.length.lessThan", 15);

      cy.contains("Clear All Filters").click();

      cy.get('[data-testid="product-card"]').should("have.length", 15);
      cy.contains("Showing 15 of 15 products").should("be.visible");
    });
  });
});
