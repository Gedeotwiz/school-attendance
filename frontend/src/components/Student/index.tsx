/** @format */

import { useState } from 'react';
import { Table } from '../share/table';
import StudentModal from '../share/addStudentForm';
import type { Column, Student } from '../../types';
import { DashboardHearder } from '../share/header';
import { useAllStudentsQuery } from '../../services/APIsRequestService';

type StudentWithRowNumber = Student & {
  rowNumber: number;
};

const StudentsComponent = () => {
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const { data, isLoading, error } = useAllStudentsQuery();

  const students = data?.data ?? [];

  const filtered = students.filter((student: Student) =>
    student.names.toLowerCase().includes(search.toLowerCase()),
  );
  const tableData: StudentWithRowNumber[] = filtered.map((student, index) => ({
    ...student,
    rowNumber: index + 1,
  }));

  const columns: Column<StudentWithRowNumber>[] = [
    {
      header: 'No',
      accessor: 'rowNumber',
      sortable: true,
    },
    {
      header: 'Name',
      accessor: 'names',
      sortable: true,
    },
    {
      header: 'Email',
      accessor: 'email',
    },
    {
      header: 'Phone Number',
      accessor: 'phone',
    },
    {
      header: 'Gender',
      accessor: 'gender',
    },
    {
      header: 'Sitting Location',
      accessor: 'sittingLocation',
    },
    {
      header: 'Actions',
      render: (row) => (
        <div className='flex gap-5'>
          <button className='text-white bg-amber-900 font-bold px-5 py-1 rounded-md'>
            Delete
          </button>

          <button className='text-white bg-green-800 font-bold px-5 py-1 rounded-md'>
            Edit
          </button>
        </div>
      ),
    },
  ];

  if (isLoading) {
    return <div>Loading students...</div>;
  }

  if (error) {
    return <div>Failed to load students.</div>;
  }

  return (
    <div className='p-6 space-y-6'>
      <div className='flex justify-between items-center'>
        <DashboardHearder
          title='Class'
          subTitle='student'
          descr='On this page you will view all students in class and be able to delete or update'
        />

        <div className='flex w-1/3 gap-5'>
          <input
            placeholder='Search student...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-full p-3 border border-white text-white rounded-lg'
          />

          <button
            onClick={() => setOpenModal(true)}
            className='bg-blue-500 text-white w-[200px] px-4 py-2 rounded-lg'
          >
            Add Student
          </button>
        </div>
      </div>

      <Table
        columns={columns}
        data={tableData}
      />

      <StudentModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default StudentsComponent;
