# 🐞 Defect Log – E-Commerce Filter App

| ID  | Feature       | Description                                | Severity | Priority | Status  | Steps to Reproduce |
|-----|--------------|--------------------------------------------|----------|----------|---------|---------------------|
| D01 | Cart Button  | Cart button not responsive, no cart feature | High     | High     | Open    | Launch app → Click cart icon → Nothing happens |
| D02 | Product Image| Clicking product image does nothing         | Medium   | Medium   | Open    | Launch app → Click any product image → No action |
| D03 | Filter Handling| App crashes when filters are null/undefined | High     | High     | Open    | Run tests → Observe failure on `filterUtils` null/undefined filters |

---

## 🔎 Detailed Defect Reports (STLC-Aligned)

### 🐞 Defect D01 – Cart Button Not Responsive
1. **Identification**: Found during manual exploratory testing.  
2. **Reproduction Steps**:  
   - Launch the app in browser  
   - Observe the top navigation bar  
   - Click the **cart button**  
   - Nothing happens (no cart page, no modal).  
3. **Expected Result**: Cart modal/page should open to show selected products.  
4. **Actual Result**: No action performed.  
5. **Severity**: **High** (core e-commerce feature missing).  
6. **Priority**: **High** (must be fixed before release).  
7. **Attachments**: Screenshot recommended.  
8. **Environment**: Chrome 139, Windows 10, Viewport 1920×1080.  
9. **Status**: Open.  

---

### 🐞 Defect D02 – Product Image Click Non-Functional
1. **Identification**: Found during manual functional testing.  
2. **Reproduction Steps**:  
   - Launch the app in browser  
   - Scroll to product grid  
   - Click on any **product image**  
   - No action performed.  
3. **Expected Result**: Product details modal/page should open with full information.  
4. **Actual Result**: Nothing happens.  
5. **Severity**: **Medium** (affects user experience but not blocking checkout).  
6. **Priority**: **Medium** (should be fixed in next sprint).  
7. **Attachments**: Screenshot recommended.  
8. **Environment**: Chrome 139, Windows 10, Viewport 1920×1080.  
9. **Status**: Open.  

---
### 🐞 Defect D03 – Filter Handling Fails with Null/Undefined
1. **Identification**: Found during Jest automated testing.  
2. **Reproduction Steps**:  
   - Run `npm test`  
   - Observe test results in `filterUtils.test.js`  
   - Errors show `Cannot read properties of null (reading 'categories')`.  
3. **Expected Result**: Function should handle `null`/`undefined` gracefully without crashing.  
4. **Actual Result**: App throws runtime error and tests fail.  
5. **Severity**: **High** (breaks filter feature).  
6. **Priority**: **High** (must be fixed before release).  
7. **Attachments**: Test run logs recommended.  
8. **Environment**: Node 20, Jest 29, Windows 10.  
9. **Status**: Open.  

---

## 📊 Severity & Priority Assignment Guide

- **Severity (Impact):**  
  - **Critical:** Blocks app usage completely.  
  - **High:** Core functionality broken (e.g., Cart not working).  
  - **Medium:** Secondary functionality issue (e.g., Image click fails).  
  - **Low:** Minor cosmetic/UI issues.  

- **Priority (Urgency):**  
  - **High:** Must be fixed before release.  
  - **Medium:** Fix in next planned sprint.  
  - **Low:** Fix only if time allows / backlog item.  
