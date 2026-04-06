import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import { Wallet, TrendingUp, TrendingDown } from "lucide-react";

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 py-4 sm:py-6">

      {/* Balance Card */}
      <Card className="shadow-sm border border-gray-300">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg text-black font-medium">
            Total Balance
          </CardTitle>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
          <Wallet className="w-5 h-5 text-gray-600" />
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-2 mt-1">
          <p className="text-2xl font-semibold text-gray-900">
            ₹25,000
          </p>
          <p className="text-sm text-gray-500 pt-2">
            Updated just now
          </p>
        </CardContent>
      </Card>

      {/* Income Card */}
      <Card className="shadow-sm border border-gray-300">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg text-black font-medium">
            Income
          </CardTitle>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
          <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-2 mt-1">
          <p className="text-2xl font-semibold text-green-600">
            ₹40,000
          </p>
          <p className="text-sm text-gray-500 pt-2">
            +8% from last month
          </p>
        </CardContent>
      </Card>

      {/* Expenses Card */}
      <Card className="shadow-sm border border-gray-300">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg text-black font-medium">
            Expenses
          </CardTitle>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100">
          <TrendingDown className="w-5 h-5 text-red-600" />
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-2 mt-1">
          <p className="text-2xl font-semibold text-red-600">
            ₹15,000
          </p>
          <p className="text-sm text-gray-500 pt-2">
            -3% from last month
          </p>
        </CardContent>
      </Card>

    </div>
  );
};

export default SummaryCards;