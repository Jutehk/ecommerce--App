#  E-Commerce Product Filter – Final Test Report

## Project Overview
This QA project validates the **E-Commerce Product Filter App**, a React application that enables users to filter products by category, price, and rating.  
Our testing strategy followed the **Software Testing Life Cycle (STLC)** and combined **manual + automation testing** for maximum coverage.

---

## Testing Approach
- **Requirement Analysis**: Reviewed user stories & acceptance criteria.  
- **Test Planning**: Prepared test plan with scope, tools, resources, risks.  
- **Test Case Design**: Documented positive, negative, and boundary cases.  
- **Test Execution**: Performed both manual and automation testing.  
- **Defect Tracking**: Logged bugs in defect log (later to be managed in Jira).  
- **Test Closure**: Compiled results, metrics, and final report.  

---

## Tools & Technologies
- **Manual Testing** → Checklists, boundary value analysis, exploratory testing.  
- **Automation** →  
  - **Jest + React Testing Library** (unit & integration)  
  - **Cypress** (end-to-end UI tests)  
- **Defect Management** → Jira (future migration, manual log kept).  
- **Reporting & Metrics** → Markdown docs + charts, PDF export.  

---

## Deliverables
- ✅ Test Plan  
- ✅ Test Cases  
- ✅ Defect Log  
- ✅ Traceability Matrix  
- ✅ Test Report (this document)  
- ✅ Metrics & Charts (included below)  

---

## Test Plan (Extract)
**Objective:** Verify correctness of product filtering, usability of UI, and robustness of input validation.  

**Scope:**  
- Filtering by category, price, and rating  
- Product card rendering  
- Responsive UI  

**Out of Scope:**  
- Backend API performance  
- Payment integration  

**Entry Criteria:**  
- Code deployed locally on `localhost:5173`  
- Test data prepared  

**Exit Criteria:**  
- 100% execution of planned test cases  
- All critical defects fixed or deferred with approval  

---

## ✅ Test Cases (Extract)

| ID   | Test Description                            | Steps | Expected Result | Status |
| ---- | ------------------------------------------- | ----- | --------------- | ------ |
| TC01 | Verify product card renders correctly       | Load app | Product details visible | ✅ Pass |
| TC02 | Filter by category                          | Select category | Only products of that category display | ✅ Pass |
| TC03 | Filter by price range                       | Set min/max price | Only products within range display | ✅ Pass |
| TC04 | Filter by rating                            | Choose rating | Products with equal/higher rating show | ✅ Pass |
| TC05 | Boundary test – empty product list          | Clear data set | App shows “No products found” message | ✅ Pass |
| TC06 | Invalid input in filter fields              | Enter non-numeric price | Validation error shown | ✅ Pass |

📌 **Full detailed test cases are included in the execution spreadsheet.**

---

## 🐞 Defect Log (Summary)

| ID   | Title | Severity | Status | Notes |
| ---- | ----- | -------- | ------ | ----- |
| D01  | Filter accepts negative price input | Medium | Fixed | Added validation |
| D02  | UI overlap on small screens         | Low    | Fixed | CSS media query fix |

📌 Total defects logged: **2** (both resolved).

---

## 🔗 Traceability Matrix

| Requirement ID | Test Cases | Status |
| -------------- | ---------- | ------ |
| RQ01 – Product Card renders | TC01 | ✅ Covered |
| RQ02 – Category filtering   | TC02 | ✅ Covered |
| RQ03 – Price filtering      | TC03, TC05, TC06 | ✅ Covered |
| RQ04 – Rating filtering     | TC04 | ✅ Covered |

✅ 100% requirement coverage achieved.

---

## Test Execution Results

### Manual Testing
- Total Cases: **16**
- Executed: **16**
- Passed: **16**
- Failed: **0**
- Coverage: **100%**

### Jest + React Testing Library
- Total Unit/Integration Tests: **12**
- Passed: **12**
- Failed: **0**
- Coverage: **100%**

### Cypress E2E Testing
- Total Tests: **18**
- Passed: **18**
- Failed: **0**
- Coverage: **100%**


---

##  Next Steps
- Move defect tracking fully into **Jira**  
- Integrate Cypress & Jest into **CI/CD pipeline**  
- Expand scope → API, performance, accessibility testing  

---

## Tester
**Juliana Ndunge** – Software QA Engineer  

📧 julianandunge54@gmail.com  
🔗 LinkedIn: https://www.linkedin.com/in/juliana-ndunge/  
🐙 GitHub: https://github.com/Jutehk 

---
