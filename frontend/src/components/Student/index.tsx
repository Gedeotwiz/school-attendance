import { useState, useEffect } from "react";
import { Table } from "../share/table";
import StudentModal from "../share/addStudentForm";
import type { Column } from "../../types";
import { DashboardHearder } from "../share/header";


type Student = {
  id: number;
  name: string;
  email: string;
  gender: string;
  phone:string;
  location:string

};


const StudentsComponent = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);

  // Load
  useEffect(() => {
    const saved = localStorage.getItem("students");
    if (saved) setStudents(JSON.parse(saved));
  }, []);

  // Save
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // ➕ Add student from modal
  const handleAdd = (data: {
    name: string;
    email: string;
    gender: string;
    phone:string;
    location:string
  }) => {
    const newStudent: Student = {
      id: Date.now(),
      ...data,
    };

    setStudents([...students, newStudent]);
  };

  // 🗑 Delete student
  const handleDelete = (id: number) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  // 🔍 Search
  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  // 📊 Table columns
  const columns: Column<Student>[] = [
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
      header: "Siting Location",
      accessor: "location",
    },
    {
      header: "Actions",
      render: (row) => (
        <div className="flex gap-5">
          <button
          onClick={() => handleDelete(row.id)}
          className="text-white bg-amber-900 font-bold px-5 py-1 rounded-md"
        >
          Delete
        </button>
          <button
          onClick={() => {}}
          className="text-white bg-green-800 font-bold px-5 py-1 rounded-md"
        >
          Edit
        </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 space-y-6">

      <div className="flex justify-between items-center">
        <DashboardHearder title="Class" subTitle="student" descr="On this page you will view all student in class and be able to delete or update"/>
        
        <div className="flex w-1/3 gap-5">
           <input
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border border-white text-white rounded-lg dark:text-dark dark:border-dark"
      />
       <button
          onClick={() => setOpenModal(true)}
          className="bg-blue-500 text-white w-[200px] px-4 py-2 rounded-lg"
        >
          Add Student
        </button>
        </div>
       
      </div>

      <Table columns={columns} data={filtered} />

      <StudentModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSave={handleAdd}
      />

    </div>
  );
};

export default StudentsComponent;