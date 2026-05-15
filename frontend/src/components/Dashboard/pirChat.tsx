import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { attendanceData } from "../../costant/data";

const COLORS = ["#22c55e", "#ef4444"]; 

export const PieChartAttendance = () => {
  const [filter, setFilter] = useState<"Today" | "Week" | "Month">("Today");

  const now = new Date();

  
  const filteredData = attendanceData.filter((item) => {
    const date = new Date(item.date);

    if (filter === "Today") {
      return date.toDateString() === now.toDateString();
    }

    if (filter === "Week") {
      const diff =
        (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
      return diff <= 7;
    }

    if (filter === "Month") {
      return (
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()
      );
    }

    return true;
  });


  let present = 0;
  let absent = 0;

  filteredData.forEach((item) => {
    item.records.forEach((r) => {
      if (r.status === "present") present++;
      else absent++;
    });
  });

  const pieData = [
    { name: "Present", value: present },
    { name: "Absent", value: absent },
  ];

  return (
    <div className="border-1 border-primary dark:bg-white p-6 rounded-2xl shadow w-1/2">

    
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white dark:text-dark">
          Attendance Overview
        </h2>
        <div className="flex bg-gray-200 dark:bg-gray-700 p-1 rounded-xl">
          {["Today", "Week", "Month"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item as any)}
              className={`px-3 py-1 text-sm rounded-lg ${
                filter === item
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

    
      <PieChart width={300} height={300}>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
          label
        >
          {pieData.map((_, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>

      <div className="flex justify-end gap-20 text-sm">
        <p className="text-green-500">Present: {present}</p>
        <p className="text-red-500">Absent: {absent}</p>
      </div>

    </div>
  );
};