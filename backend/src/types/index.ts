
import { Types } from "mongoose";

export interface IStudent {
  _id: Types.ObjectId;
  names: string;
  email: string;
  phone: string;
  gender: "Male" | "Female";
  sittingLocation?: string;
  status: "Active" | "Inactive";
  avatar?: string;
}

export interface IAttendance {
  session: Types.ObjectId; 
  student: Types.ObjectId;
  date: Date;
  status: "Present" | "Absent" | "Late";
  checkInTime?: string;
  comment?: string;
}

export interface IAttendanceSession {
  _id?: string;
  date: Date;
  title: string;
  course?: string;
  facilitator?: string;
  isClosed: boolean;
}