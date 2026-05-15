export type Column<T> = {
  header: string;
  accessor?: keyof T;
  sortable?: boolean;
  render?: (row: T) => React.ReactNode;
};

export type Status = "present" | "absent";

export type Student = {
  id: number;
  name: string;
  email: string;
  gender: "Male" | "Female";
};

export type AttendanceRecord = {
  studentId: number;
  status: Status;
};

export type AttendanceByDate = {
  date: string; // YYYY-MM-DD
  records: AttendanceRecord[];
};

export const students: Student[] = [
  { id: 1, name: "John Doe", email: "john@gmail.com", gender: "Male" },
  { id: 2, name: "Alice Smith", email: "alice@gmail.com", gender: "Female" },
  { id: 3, name: "Eric Brown", email: "eric@gmail.com", gender: "Male" },
  { id: 4, name: "Mary Jane", email: "mary@gmail.com", gender: "Female" },
];