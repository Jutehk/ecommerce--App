# 🧪 Test_Report.md

---

## 📋 Introduction

This report documents the comprehensive testing conducted on the E-Commerce Product Filter App. It includes both **unit testing** using **Jest** for core utility logic and **system testing** using **Cypress** for the end-to-end functionality of the user interface.

---

## 🧪 Testing Techniques Used

### ✅ Unit Testing (Jest)

- Tested filtering logic for categories, price, and rating.
- Verified sorting functionality.
- Validated utility methods like `getUniqueCategories` and `getPriceRange`.
- Included **Boundary Value Analysis** for price and rating.

### ✅ System Testing (Cypress)

- Tested interactive UI elements:
  - Category filters
  - Price sliders
  - Rating filters
  - Sorting dropdown
  - Mobile sidebar behavior
- Verified expected product results appear after interactions.
- Simulated user flows across desktop and mobile views.

---

## ✅ Summary of Test Results

| Test Layer   | Tool    | Tests Passed | Tests Failed       | Coverage              |
| ------------ | ------- | ------------ | ------------------ | --------------------- |
| Unit Tests   | Jest    | 16           | 0                  | Core utilities (100%) |
| System Tests | Cypress | 19           | 0 _(after fixing)_ | UI behaviors (100%)   |

---

## 📌 Functional Requirements Tested

1. ✅ Filtering by multiple categories.
2. ✅ Filtering products by dynamic price range.
3. ✅ Filtering by minimum rating.
4. ✅ Sorting by price and rating.
5. ✅ Responsive sidebar on mobile.
6. ✅ Combined filters produce expected output.
7. ✅ Reset filters behavior.
8. ✅ Accurate product count display.

---

## 🔍 Techniques Applied

| Type                       | Description                                         |
| -------------------------- | --------------------------------------------------- |
| **Black-box Testing**      | Ensured outputs matched inputs using UI.            |
| **White-box Testing**      | Covered utility function logic branches.            |
| **Boundary Analysis**      | Checked limits for price and rating filters.        |
| **Decision Table Testing** | Verified results under various filter combinations. |
| **Manual UI Testing**      | Verified appearance and behavior manually.          |

---

## 🐞 Bugs Identified & Fixed (Cypress)

| Issue ID | Description                         | Status |
| -------- | ----------------------------------- | ------ |
| #1       | Price slider not updating results   | Fixed  |
| #2       | Mobile sidebar not closing on click | Fixed  |

---

## 📌 Conclusion

The application passed all unit and system tests successfully. The filters, sorting logic, and UI responsiveness work as intended across different scenarios and devices. Both core logic and end-user experience are functioning as expected.
