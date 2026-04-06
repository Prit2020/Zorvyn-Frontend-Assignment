import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const lineData = [
  { name: "Jan", income: 4000, expenses: 2400 },
  { name: "Feb", income: 3000, expenses: 1398 },
  { name: "Mar", income: 5000, expenses: 2800 },
  { name: "Apr", income: 4780, expenses: 3908 },
  { name: "May", income: 5890, expenses: 3200 },
];

const pieData = [
  { name: "Food", value: 400 },
  { name: "Rent", value: 800 },
  { name: "Shopping", value: 300 },
  { name: "Other", value: 200 },
];

const COLORS = ["#4f46e5", "#22c55e", "#f59e0b", "#ef4444"];

const ChartsSection = () => {
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 flex-1 h-full w-full min-w-0">
      {/* Line Chart */}
      <Card className="border border-gray-200 h-full flex flex-col">
        <CardHeader>
          <CardTitle>Income vs Expenses</CardTitle>
        </CardHeader>

        <CardContent className="flex-1">
          <div className="w-full h-full min-h-[200px] lg:min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} width={45} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="income"
                  stroke="#22c55e"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="expenses"
                  stroke="#ef4444"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Pie Chart */}
      <Card className="border border-gray-200 shadow-sm h-full flex flex-col">
        <CardHeader>
          <CardTitle>Expense Distribution</CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex items-center justify-center">
          <div className="w-full h-full min-h-[200px] lg:min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius="60%"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartsSection;