import { useMemo, useState } from "react";
import ReportCards from "./report-cards";
import ReportTable from "./report-table";
import AttendanceChart from "./attendance-chart";
// import StudentReport from "./student-report";
import { attendanceData } from "../../costant/data";
import { DashboardHearder } from "../share/header";

export type AttendanceStatus = "present" | "absent";

export type AttendanceRecord = {
  studentId: number;
  studentName: string;
  date: string;
  status: AttendanceStatus;
};

const attendanceDataa: AttendanceRecord[] = [
  {
    studentId: 1,
    studentName: "John Doe",
    date: "2026-05-13",
    status: "present",
  },
  {
    studentId: 2,
    studentName: "Alice",
    date: "2026-05-13",
    status: "absent",
  },
  {
    studentId: 1,
    studentName: "John Doe",
    date: "2026-05-10",
    status: "present",
  },
  {
    studentId: 2,
    studentName: "Alice",
    date: "2026-05-09",
    status: "present",
  },
  {
    studentId: 3,
    studentName: "Bob",
    date: "2026-04-15",
    status: "absent",
  },
];

const filters = ["Daily", "Weekly", "Monthly", "Yearly"] as const;

type FilterType = (typeof filters)[number];

const ReportsPage = () => {
  const [activeFilter, setActiveFilter] =
    useState<FilterType>("Weekly");

  const filteredData = useMemo(() => {
    const now = new Date();

    return attendanceDataa.filter((item) => {
      const itemDate = new Date(item.date);

      if (activeFilter === "Daily") {
        return itemDate.toDateString() === now.toDateString();
      }


      if (activeFilter === "Weekly") {
        const diff =
          (now.getTime() - itemDate.getTime()) /
          (1000 * 60 * 60 * 24);

        return diff <= 7;
      }

      
      if (activeFilter === "Monthly") {
        return (
          itemDate.getMonth() === now.getMonth() &&
          itemDate.getFullYear() === now.getFullYear()
        );
      }

      
      if (activeFilter === "Yearly") {
        return (
          itemDate.getFullYear() === now.getFullYear()
        );
      }

      return true;
    });
  }, [activeFilter]);

  return (
    <div className="space-y-6">

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4">
        <DashboardHearder title="Attendance" descr="Analyze attendance statistics and download reports" subTitle="Reports"/>
      </div>

     
      <div className="flex flex-wrap justify-end border-b-1 border-[#eeee] dark:border-b-1 dark:border-white my-10 gap-10">
        {filters.map((filter) => (
          <div
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-sm transition font-medium ${
              activeFilter === filter
                ? "border-b-4 border-blue-500 shadow"
                : ""
            }`}
          >
            <h1 className={` ${ activeFilter===filter ? "border-blue-500 text-blue-700":"dark:text-dark text-white"}  font-bold text-2xl`}>{filter}</h1>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        <div className="xl:col-span-1">
          <AttendanceChart data={filteredData} />
        </div>
         {/* <div className="xl:col-span-1">
              <StudentReport data={filteredData} />
         </div> */}
         <div className="xl:col-span-1 flex justify-end">
              <ReportCards/>
         </div>
         
        
      </div>
      <ReportTable data={attendanceData} />

    </div>
  );
};

export default ReportsPage;