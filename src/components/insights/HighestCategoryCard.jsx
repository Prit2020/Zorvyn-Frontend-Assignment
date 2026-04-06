import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#6366F1"];

export default function HighestCategoryCard({ data }) {
  const item = data?.[0]; 

 return (
  <Card className="w-full h-full">
    <CardHeader>
      <CardTitle>Highest Spending Category</CardTitle>
    </CardHeader>

    <CardContent className="flex flex-col justify-between h-full">
      {item ? (
        <>
          {/* Info */}
          <div>
            <p className="text-muted-foreground text-sm">
              {item.name}
            </p>
            <h3 className="text-2xl font-bold text-red-500">
              ₹{item.value.toLocaleString()}
            </h3>
          </div>

          {/* Chart */}
          <div className="w-full h-[220px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                >
                  {data.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </>
      ) : (
        <div className="text-muted-foreground text-sm">
          No data available
        </div>
      )}
    </CardContent>
  </Card>
);
}