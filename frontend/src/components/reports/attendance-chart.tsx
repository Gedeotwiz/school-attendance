import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import type { AttendanceRecord } from "./index";

const COLORS = ["#22c55e", "#ef4444"];

type Props = {
  data: AttendanceRecord[];
};

const AttendanceChart = ({ data }: Props) => {

  const present = data.filter(
    (item) => item.status === "present"
  ).length;

  const absent = data.filter(
    (item) => item.status === "absent"
  ).length;

  const chartData = [
    {
      name: "Present",
      value: present,
    },
    {
      name: "Absent",
      value: absent,
    },
  ];

  return (
    <div className="border-1 border-primary dark:bg-white p-6 rounded-2xl shadow">

      <h2 className="text-xl font-bold text-white dark:text-dark mb-6">
        Attendance Overview
      </h2>

      <div className="h-[350px]">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >
              {chartData.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default AttendanceChart;