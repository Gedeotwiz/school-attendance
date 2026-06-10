import Attendance from "../../models/attendance";
import AttendanceSession from "../../models/attendanceSession";
import { IAttendanceSession } from "../../types";

export const createAttendance = async (
  data: object
) => {
  return await Attendance.create(data);
};

export const getAllAttendance = async () => {
  return await Attendance.find()
    .populate("student");
};


export const createSession = async (data: IAttendanceSession) => {
  return await AttendanceSession.create(data);
};

export const getSessions = async () => {
  return await AttendanceSession.find();
};

export const getSessionById = async (id: string) => {
  return await AttendanceSession.findById(id);
};

export const updateSession = async (
  id: string,
  data: Partial<IAttendanceSession>
) => {
  return await AttendanceSession.findByIdAndUpdate(id, data, {
    new: true,
  });
};

export const deleteSession = async (id: string) => {
  return await AttendanceSession.findByIdAndDelete(id);
};