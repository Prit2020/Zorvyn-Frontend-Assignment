import { useState, useEffect } from "react";
import { getTransactions } from "@/utility/storage";
import {
  getHighestSpendingCategory,
  getMonthlyComparison,
} from "@/utility/insights";

import HeadingSection from "@/components/layout/HeadingSection";
import HighestCategoryCard from "@/components/insights/HighestCategoryCard";
import MonthlyComparisonCard from "@/components/insights/MonthlyComparisonCard";
import { Skeleton } from "@/components/ui/skeleton";

function Insights() {
  const [loading, setLoading] = useState(true);

  const transactions = getTransactions() || [];

  const highest = getHighestSpendingCategory(transactions);
  const monthly = getMonthlyComparison(transactions);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <div className="">
        <HeadingSection heading=" Insights" subheading="Track where your money goes and compare trends over time" />
      </div>

      <div className="px-4 py-4 flex flex-col gap-6">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Skeleton className="h-40 w-full rounded-xl" />
            <Skeleton className="h-40 w-full rounded-xl" />
          </div>
        ) : transactions.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20 text-gray-500">
            No transaction data available to generate insights.
          </div>
        ) : (
          /* Actual Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <HighestCategoryCard data={highest} />
            <MonthlyComparisonCard data={monthly} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Insights;