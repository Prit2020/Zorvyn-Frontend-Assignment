//  Utility functions for Insights Page

// Filter only expense transactions
const getExpenseTransactions = (transactions) => {
  return (transactions || []).filter((txn) => txn.type === "expense");
};

// Format Month (e.g., Oct 2025)
const formatMonth = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString("default", {
    month: "short",
    year: "numeric",
  });
};

// Highest Spending Category (Pie Chart Compatible)
export const getHighestSpendingCategory = (transactions) => {
  const expenses = getExpenseTransactions(transactions);

  if (!expenses.length) return [];

  const categoryMap = {};

  expenses.forEach((txn) => {
    const category = txn.category;
    const amount = Number(txn.amount) || 0;

    categoryMap[category] = (categoryMap[category] || 0) + amount;
  });

  let maxCategory = null;
  let maxAmount = 0;

  for (const category in categoryMap) {
    if (categoryMap[category] > maxAmount) {
      maxAmount = categoryMap[category];
      maxCategory = category;
    }
  }

  // Return ARRAY for Recharts
  return maxCategory
    ? [
        {
          name: maxCategory,
          value: maxAmount,
        },
      ]
    : [];
};

// Monthly Comparison (Bar Chart Compatible)
export const getMonthlyComparison = (transactions) => {
  const expenses = getExpenseTransactions(transactions);

  if (!expenses.length) return [];

  const monthMap = {};

  expenses.forEach((txn) => {
    if (!txn.date) return;

    const monthKey = txn.date.slice(0, 7); // YYYY-MM
    const amount = Number(txn.amount) || 0;

    monthMap[monthKey] = (monthMap[monthKey] || 0) + amount;
  });

  const months = Object.keys(monthMap).sort();

  if (months.length === 0) return [];

  const currentMonth = months[months.length - 1];
  const previousMonth = months[months.length - 2];

  const result = [];

  if (previousMonth) {
    result.push({
      month: formatMonth(previousMonth),
      amount: monthMap[previousMonth],
    });
  }

  result.push({
    month: formatMonth(currentMonth),
    amount: monthMap[currentMonth],
  });

  return result;
};

// Category-wise Data (for Bar Chart)
export const getCategoryWiseData = (transactions) => {
  const expenses = getExpenseTransactions(transactions);

  if (!expenses.length) return [];

  const categoryMap = {};

  expenses.forEach((txn) => {
    const category = txn.category;
    const amount = Number(txn.amount) || 0;

    categoryMap[category] = (categoryMap[category] || 0) + amount;
  });

  return Object.keys(categoryMap).map((category) => ({
    category,
    amount: categoryMap[category],
  }));
};

// Monthly Trend Data (for Line Chart)
export const getMonthlyTrendData = (transactions) => {
  const expenses = getExpenseTransactions(transactions);

  if (!expenses.length) return [];

  const monthMap = {};

  expenses.forEach((txn) => {
    if (!txn.date) return;

    const monthKey = txn.date.slice(0, 7);
    const amount = Number(txn.amount) || 0;

    monthMap[monthKey] = (monthMap[monthKey] || 0) + amount;
  });

  return Object.keys(monthMap)
    .sort()
    .map((monthKey) => ({
      month: formatMonth(monthKey),
      amount: monthMap[monthKey],
    }));
};