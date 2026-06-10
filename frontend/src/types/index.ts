export type Column<T> = {
  header: string;
  accessor?: keyof T;
  sortable?: boolean;
  render?: (row: T) => React.ReactNode;
};

export type Status = "present" | "absent";

export type Student = {
  _id: string;
  names: string;
  email: string;
  gender: "Male" | "Female";
  phone: string;
  sittingLocation: string;
  status: string;
};

export type AttendanceRecord = {
  studentId: number;
  status: Status;
};

export type AttendanceByDate = {
  date: string; // YYYY-MM-DD
  records: AttendanceRecord[];
};

export type StudentResponse = {
  status: number;
  success: boolean;
  message: string;
  data: Student[];
};

export type ApiResponse<T> = {
  status: number;
  success: boolean;
  message: string;
  data: T;
};

export type AddStudentDto = {
  names: string;
  email: string;
  gender: "Male" | "Female";
  phone: string;
  sittingLocation: string
};
