# 🛍️ E-Commerce Product Filter – QA Project

## 📖 Project Overview
This project validates the quality of the **E-Commerce Product Filter App**, a React-based application that allows users to filter products by **category, price, and rating**.  

The QA process covers **manual and automated testing** with industry tools to ensure functionality, reliability, and usability.

---

## 📂 Repository Structure
```bash
ecommerce-App/                    
│
├── cypress/                 # Cypress E2E tests
│   ├── e2e/                 # Test specifications
│   ├── fixtures/            # Mock data
│   ├── support/             # Commands/utilities
│   └── reports/ 
├── src/                     # Application source code
│            
├── __tests__/               # Jest & RTL unit/integration tests
│   ├── ProductCard.test.js
│   ├── FilterBar.test.js
│   └── ...
│
├── qa-docs/                 # QA documentation
│   ├── test-plan.md
│   ├── test-cases.md
│   ├── defect-log.md
│   ├── traceability-matrix.md
│   ├── test-report.md
│   └── metrics/             # Charts, screenshots
│
├── reports/                 # Final exported deliverables
│   ├── test-report.pdf
│   └── ...
│
└── README.md



Testing Approach
🔹 Manual Testing

Test Plan (qa-docs/test-plan.md
)

Test Cases (qa-docs/test-cases.md
)

Defect Log (qa-docs/defect-log.md
)

Traceability Matrix (qa-docs/traceability-matrix.md
)

🔹 Automated Testing

Jest + React Testing Library → Unit & Integration tests

Cypress → End-to-End (E2E) UI tests

Results captured in:

qa-docs/test-report.md

reports/test-report.pdf

| Category              | Total | Passed | Failed | Coverage |
| --------------------- | ----- | ------ | ------ | -------- |
| Manual Test Cases     | 16    | 16     | 0      | 100% ✅   |
| Jest + RTL Unit Tests | 12    | 12     | 0      | 100% ✅   |
| Cypress E2E Tests     | 18    | 18     | 0      | 100% ✅   |


✅ 100% test pass rate across manual and automation

📈 Boundary value & invalid input checks included

📊 Detailed charts in qa-docs/metrics/

🛠️ Tools & Technologies

Manual Testing → Checklists, boundary value analysis, exploratory testing

Automation → Cypress, Jest, React Testing Library

Test Management → Jira (test case tracking & defect management)

CI/CD Ready → Node.js + npm scripts

Reporting → Markdown docs + PDF exports

📌 Deliverables

📄 Test Plan

✅ Test Cases

🐞 Defect Log

🔗 Traceability Matrix

📊 Test Report (Markdown)

📑 Test Report (PDF)

🚀 How to Run Tests
1️⃣ Run Unit/Integration Tests (Jest + RTL)
npm test

2️⃣ Run Cypress E2E Tests (headed)
npm run cypress:open

3️⃣ Run Cypress E2E Tests (headless)
npm run cypress:run

📌 Next Steps

Migrate manual test cases & defect logs into Jira for live tracking

Integrate Cypress & Jest into CI/CD pipeline (GitHub Actions)

Expand tests to cover API & performance testing

👩‍💻 QA Lead

Juliana Ndunge – Software QA Engineer

📧 [your-email@example.com
]

🔗 [LinkedIn Profile]

🐙 [GitHub Portfolio]