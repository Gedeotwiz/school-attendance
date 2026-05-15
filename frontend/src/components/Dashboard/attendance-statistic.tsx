import { useState } from "react";

type AttendanceRecord = {
  date: string;
  records: {
    studentId: number;
    status: "present" | "absent";
  }[];
};

type Props = {
  attendance: AttendanceRecord[];
};

const AttendanceStatistic = ({ attendance }: Props) => {
  const [activeFilter, setActiveFilter] = useState<"Dayly"|"Week" | "Monthly" | "Yearly">("Week");

  const now = new Date();

  const filterData = () => {
  return attendance.filter((item) => {
    const date = new Date(item.date);

    if (activeFilter === "Dayly") {
      return date.toDateString() === now.toDateString();
    }

    if (activeFilter === "Week") {
      const diff =
        (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
      return diff <= 7;
    }

    if (activeFilter === "Monthly") {
      return (
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()
      );
    }

    if (activeFilter === "Yearly") {
      return date.getFullYear() === now.getFullYear();
    }

    return true;
  });
};

  const processedData = filterData().map((item) => {
    const present = item.records.filter(r => r.status === "present").length;
    const total = item.records.length;
    const percentage = total === 0 ? 0 : (present / total) * 100;

    return Math.round(percentage);
  });

  return (
    <div className="lg:col-span-9 border-1 border-primary dark:bg-white w-1/2 p-6 rounded-2xl shadow">

    
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white dark:text-dark">
          Attendance Statistics
        </h2>

        <div className="flex bg-gray-200 dark:bg-gray-700 p-1 rounded-xl">
          {["Dayly","Week", "Monthly", "Yearly"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter as any)}
              className={`px-3 py-1 rounded-lg text-sm ${
                activeFilter === filter
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-end  h-80 gap-2 overflow-x-auto">
        {processedData.map((value, index) => (
          <div
            key={index}
            style={{ height: `${value}%` }}
            className="w-16 bg-blue-400 rounded-t hover:bg-blue-600 transition relative group"
          >
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100">
              {value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceStatistic;