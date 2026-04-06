import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MonthlyComparisonCard({ data }) {
  return (
    <Card className="w-full h-full">
      {/* Header */}
      <CardHeader>
        <CardTitle>Monthly Comparison</CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent className="h-full">
        {data && data.length > 0 ? (
          <div className="w-full h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="amount"
                  fill="#6366f1"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="text-gray-300 text-sm">No data available</div>
        )}
      </CardContent>
    </Card>
  );
}