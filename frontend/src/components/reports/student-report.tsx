// import { useMemo, useState } from "react";
// import type { AttendanceRecord} from "../../types";
// import type { Student } from "../../types";

// type Props = {
//   data: AttendanceRecord[];
// };

// type StudentStats = {
//   id: number;
//   name: string;
//   present: number;
//   absent: number;
//   percentage: number;
// };

// const StudentReport = ({ data }: Props) => {
//   const [search, setSearch] = useState("");

//   const studentsStats: StudentStats[] = useMemo(() => {
//     const grouped = data.reduce((acc, item) => {
//       const student = Student.find((s) => s.id === item.studentId);

//       if (!student) return acc;

//       if (!acc[item.studentId]) {
//         acc[item.studentId] = {
//           id: item.studentId,
//           name: student.name,
//           present: 0,
//           absent: 0,
//           percentage: 0,
//         };
//       }

//       if (item.status === "present") {
//         acc[item.studentId].present += 1;
//       } else {
//         acc[item.studentId].absent += 1;
//       }

//       return acc;
//     }, {} as Record<number, StudentStats>);

//     return Object.values(grouped).map((student) => {
//       const total = student.present + student.absent;

//       return {
//         ...student,
//         percentage: total === 0 ? 0 : Math.round((student.present / total) * 100),
//       };
//     });
//   }, [data]);

//   const filteredStudents = studentsStats.filter((student) =>
//     student.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="border-1 border-primary dark:bg-white h-[450px] rounded-2xl shadow p-6">

//       <div className="flex flex-col gap-4 mb-6">
//         <h2 className="text-xl font-bold text-white dark:text-dark">
//           Student Reports
//         </h2>

//         <input
//           placeholder="Search student..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="border border-white text-white rounded-lg dark:text-dark dark:border-dark px-4 py-2 rounded-xl outline-none"
//         />
//       </div>

//       <div className="space-y-4 max-h-[500px] overflow-y-auto">

//         {filteredStudents.length === 0 ? (
//           <p className="text-gray-500 dark:text-gray-400">
//             No students found
//           </p>
//         ) : (
//           filteredStudents.map((student) => (
//             <div
//               key={student.id}
//               className="flex justify-between items-center shadow  dark:bg-[#eeee] p-4 rounded-xl"
//             >

//               <div>
//                 <h3 className="font-semibold text-white dark:text-dark">
//                   {student.name}
//                 </h3>

//                 <p className="text-sm dark:text-gray-500 text-gray-300">
//                   Attendance Rate: {student.percentage}%
//                 </p>
//               </div>

//               <div className="flex gap-6">

//                 <div className="text-center">
//                   <p className="text-green-500 font-bold text-lg">
//                     {student.present}
//                   </p>
//                   <span className="text-sm text-white dark:text-dark">Present</span>
//                 </div>

//                 <div className="text-center">
//                   <p className="text-red-500 font-bold text-lg">
//                     {student.absent}
//                   </p>
//                   <span className="text-sm text-white dark:text-dark">Absent</span>
//                 </div>

//               </div>

//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default StudentReport;