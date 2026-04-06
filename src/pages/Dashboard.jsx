import React, { useEffect, useState } from "react";
import HeadingSection from "@/components/layout/HeadingSection";
import SummaryCards from "@/components/dashboard/SummaryCards";
import ChartsSection from "@/components/dashboard/ChartsSection";
import { Skeleton } from "@/components/ui/skeleton";

function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full flex flex-col overflow-y-auto sm:pb-4">
      <div>
        <HeadingSection heading="Dashboard" subheading="Overview of your activities" />
        <div className="px-4 flex flex-col">
          {loading ? (
            <div className="space-y-6 mt-4">
              {/* Summary Cards Skeleton */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Skeleton className="h-24 w-full rounded-xl" />
                <Skeleton className="h-24 w-full rounded-xl" />
                <Skeleton className="h-24 w-full rounded-xl" />
              </div>

              {/* Charts Skeleton */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Skeleton className="h-64 w-full rounded-xl" />
                <Skeleton className="h-64 w-full rounded-xl" />
              </div>
            </div>
          ) : (
            <>
              <SummaryCards />
              <div className="flex-1 flex">
                <ChartsSection />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;