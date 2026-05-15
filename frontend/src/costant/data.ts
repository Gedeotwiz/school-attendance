import type { AttendanceByDate } from "../types";

export const attendanceData: AttendanceByDate[] = [
  {
    date: "2026-05-01",
    records: [
      { studentId: 1, status: "present" },
      { studentId: 2, status: "present" },
      { studentId: 3, status: "absent" },
      { studentId: 4, status: "present" },
    ],
  },
  {
    date: "2026-05-02",
    records: [
      { studentId: 1, status: "present" },
      { studentId: 2, status: "absent" },
      { studentId: 3, status: "present" },
      { studentId: 4, status: "present" },
    ],
  },
  {
    date: "2026-05-03",
    records: [
      { studentId: 1, status: "absent" },
      { studentId: 2, status: "present" },
      { studentId: 3, status: "present" },
      { studentId: 4, status: "present" },
    ],
  },
  {
    date: "2026-05-04",
    records: [
      { studentId: 1, status: "present" },
      { studentId: 2, status: "present" },
      { studentId: 3, status: "present" },
      { studentId: 4, status: "absent" },
    ],
  },
  {
    date: "2026-05-05",
    records: [
      { studentId: 1, status: "present" },
      { studentId: 2, status: "present" },
      { studentId: 3, status: "absent" },
      { studentId: 4, status: "present" },
    ],
  },
];