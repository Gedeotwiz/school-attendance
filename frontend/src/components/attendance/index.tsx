import { useEffect, useState } from "react";
import { Table } from "../share/table";
import { DashboardHearder } from "../share/header";
import type { Column } from "../../types";

type Student = {
  id: number;
  name: string;
  email: string;
  gender: string;
  phone: string;
  location: string;
};

type AttendanceStudent = Student & {
  status: "Present" | "Absent";
};

const AttendanceComponent = () => {
  const [students, setStudents] = useState<AttendanceStudent[]>([]);
  const [search, setSearch] = useState("");

  // Load students from localStorage
  useEffect(() => {
    const savedStudents = localStorage.getItem("students");

    if (savedStudents) {
      const parsed: Student[] = JSON.parse(savedStudents);

      const attendanceData: AttendanceStudent[] = parsed.map((student) => ({
        ...student,
        status: "Absent",
      }));

      setStudents(attendanceData);
    }
  }, []);

  // Change attendance status
  const handleStatusChange = (
    id: number,
    status: "Present" | "Absent"
  ) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, status }
          : student
      )
    );
  };

  // Save attendance
  const handleSaveAttendance = () => {
    const today = new Date().toLocaleDateString();

    localStorage.setItem(
      `attendance-${today}`,
      JSON.stringify(students)
    );

    alert("Attendance saved successfully!");
  };

  // Search student
  const filtered = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  const columns: Column<AttendanceStudent>[] = [
  {
    header: "ID",
    accessor: "id",
    sortable: true,
  },
  {
    header: "Name",
    accessor: "name",
    sortable: true,
  },
  {
    header: "Email",
    accessor: "email",
  },
  {
    header: "Phone Number",
    accessor: "phone",
  },
  {
    header: "Gender",
    accessor: "gender",
  },
  {
    header: "Sitting Location",
    accessor: "location",
  },
  {
    header: "Status",
    render: (row) => (
      <span
        className={`px-3 py-1 rounded-lg text-white font-semibold ${
          row.status === "Present"
            ? "bg-green-600"
            : "bg-red-600"
        }`}
      >
        {row.status}
      </span>
    ),
  },
  {
    header: "Actions",
    render: (row) => (
      <div className="flex gap-3">
        <button
          onClick={() =>
            handleStatusChange(row.id, "Present")
          }
          className="text-white bg-green-700 font-bold px-4 py-2 rounded-md"
        >
          Present
        </button>

        <button
          onClick={() =>
            handleStatusChange(row.id, "Absent")
          }
          className="text-white bg-red-700 font-bold px-4 py-2 rounded-md"
        >
          Absent
        </button>
      </div>
    ),
  },
  ]

  return (
    <div className="p-6 space-y-6">

      <div className="flex justify-between items-center">
        <DashboardHearder title="Track" subTitle="attendance" descr="On this page you will view all student in class and be able to delete or update"/>
        
        <div className="flex w-1/3 gap-5">
           <input
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border border-white text-white rounded-lg dark:text-dark dark:border-dark"
      />
        </div>
       
      </div>

      <Table columns={columns} data={filtered} />

    </div>
  );
};

export default AttendanceComponent;