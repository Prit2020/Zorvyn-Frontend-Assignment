# 📊 Finance Dashboard

A modern and responsive **Expense Management Dashboard** built with **React + Vite**.  
It allows users to track transactions, analyze spending patterns, and gain insights through interactive charts.

---

## 🚀 Features

- 📌 Dashboard overview with summary cards
- 📊 Interactive charts for expense visualization
- 📈 Insights page for spending analysis
- 💳 Transactions management (view, add, filter)
- 🔄 Pagination support
- 🎯 Role-based context handling
- ⚡ Fast performance with Vite
- 🎨 Clean and reusable component architecture

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **State Management:** React Context API
- **Routing:** React Router
- **Utilities:** Custom utility functions

---

## 📁 Project Structure

```
src/
│── assets/                # Static assets
│
├── components/
│   ├── common/
│   │   └── Pagination.jsx
│   │
│   ├── dashboard/
│   │   ├── ChartsSection.jsx
│   │   └── SummaryCards.jsx
│   │
│   ├── insights/
│   │   ├── HighestCategoryCard.jsx
│   │   └── MonthlyComparisonCard.jsx
│   │
│   ├── layout/
│   │   ├── FullPageLoader.jsx
│   │   ├── HeadingSection.jsx
│   │   ├── MainLayout.jsx
│   │   └── Sidebar.jsx
│   │
│   ├── transactions/
│   │   ├── TransactionDialog.jsx
│   │   ├── TransactionsHeader.jsx
│   │   └── TransactionsTable.jsx
│   │
│   └── ui/                # Reusable UI components
│
├── context/
│   └── RoleContext.jsx
│
├── data/
│   └── staticData.js
│
├── lib/
│   └── utils.js
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Insights.jsx
│   └── Transactions.jsx
│
├── router/
│   └── AppRouter.jsx
│
├── utility/
│   ├── insights.js
│   ├── roleStorage.js
│   └── storage.js
│
└── main.jsx
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

---

## 🧠 Key Concepts Used

- **Component-Based Architecture** for scalability
- **Separation of Concerns** (UI, logic, utilities)
- **Pure Utility Functions** (especially in `utility/insights.js`)
- **Reusable Components** (cards, tables, dialogs)
- **Context API for global state management**

---

## 📌 Pages Overview

- **Dashboard**
  - Summary cards
  - Charts visualization

- **Insights**
  - Highest spending category
  - Monthly comparisons

- **Transactions**
  - Transaction listing
  - Add/View transactions
  - Pagination support

---

## 🔧 Custom Utilities

- `insights.js` → Handles all analytics logic
- `storage.js` → Local storage helpers
- `roleStorage.js` → Role-based data handling

---


## 📌 Future Improvements

- Backend integration (API-based data)
- Authentication & authorization
- Dark mode support
- Advanced filtering & search
- Export reports (CSV/PDF)

---

## 👨‍💻 Author

**Prit Chudasama**

---

## 📄 License

This project is open-source and available under the MIT License.
