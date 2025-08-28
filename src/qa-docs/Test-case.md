# 📑 Test Cases – E-Commerce Filter App

| TC ID | Feature          | Test Case Description                            | Pre-Condition                  | Steps | Expected Result | Status |
|-------|-----------------|--------------------------------------------------|--------------------------------|-------|-----------------|--------|
| TC01  | UI Load         | Verify app title and layout load correctly        | App deployed                   | Open `/` | Title and layout visible | ✅ Pass |
| TC02  | Product List    | Verify all products render on initial load        | Product data available         | Open `/` | 15 products displayed | ✅ Pass |
| TC03  | Category Filter | Filter by *Electronics*                          | App running                    | Select Electronics | Only 4 products shown | ✅ Pass |
| TC04  | Category Filter | Apply multiple categories                        | App running                    | Select Electronics + Clothing | Combined product list | ✅ Pass |
| TC05  | Category Filter | Uncheck category                                 | At least one selected          | Deselect Electronics | List resets to all products | ✅ Pass |
| TC06  | Price Filter    | Filter using valid range                         | App running                    | Enter 100–200 | Products in range only | ✅ Pass |
| TC07  | Price Filter    | Enter restrictive range                          | App running                    | Enter 999–1000 | “No products found” shown | ✅ Pass |
| TC08  | Sorting         | Sort products low → high                         | Products visible               | Select price-low-high | First product = lowest price | ✅ Pass |
| TC09  | Sorting         | Sort products high → low                         | Products visible               | Select price-high-low | First product = highest price | ✅ Pass |
| TC10  | Sorting         | Sort products by rating                          | Products visible               | Select rating-high-low | Highest rated first | ✅ Pass |
| TC11  | Combined Filter | Apply category + price + rating                  | App running                    | Select Electronics, max=300, rating ≥4 | Results match criteria | ✅ Pass |
| TC12  | Responsive      | Verify app on mobile viewport                    | App deployed                   | Set viewport 375×667 | Layout adapts & products visible | ✅ Pass |
| TC13  | Boundary Value  | Min price boundary (0)                           | App running                    | Enter 0–1 | Valid handling, products displayed | ✅ Pass |
| TC14  | Boundary Value  | Max price boundary (1000)                        | App running                    | Enter 999–1000 | Valid handling, products displayed | ✅ Pass |
| TC15  | Boundary Value  | Invalid range (min > max)                        | App running                    | Enter 500–100 | Error/empty list shown gracefully | ✅ Pass |
| TC16  | Clear Filters   | Clear all filters restores defaults              | Filters applied                | Click “Clear All Filters” | 15 products shown again | ✅ Pass |
| TC17  | Cart Button     | Verify cart button responsiveness                | App deployed                   | Click cart icon | Expected cart modal/redirect (Not implemented) | ❌ Fail |
| TC18  | Product Click   | Verify clicking product image opens details page | App deployed                   | Click product image | Product details modal/page (Not implemented) | ❌ Fail |

---

## 📝 Steps Used to Produce
1. Manual exploratory testing on deployed app.  
2. Functional test execution via Cypress automation.  
3. Validation against expected requirements (filters, sorting, boundary values).  
4. Recording of observed vs. expected behavior.  
5. Documentation of failures (non-functional cart + image click).  
