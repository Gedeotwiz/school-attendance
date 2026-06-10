import { Request, Response } from "express";
import StatusCodes from "http-status-codes";

import {
  createAttendance,
  getAllAttendance,
} from "./attendanceRepository";

import {
  handleError,
  handleSuccess,
} from "../../utils/responseUtils";
import { findOneStudent } from "../student/studentRepository";

export const markAttendance = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const studentId = req.params.studentId;
    
    if (!studentId|| Array.isArray(studentId)) {
          return handleError(res,StatusCodes.BAD_REQUEST,'Invalid Id')
        }

    const student = findOneStudent(studentId)

    if (!student) {
      return handleError(
        res,
        StatusCodes.NOT_FOUND,
        "Student not found"
      );
    }

    const attendance =
      await createAttendance({
        student: studentId,
        status: req.body.status,
        checkInTime:
          req.body.checkInTime,
        comment: req.body.comment,
      });

    return handleSuccess(
      res,
      StatusCodes.CREATED,
      "Attendance marked successfully",
      attendance
    );
  } catch (error: unknown) {
    return handleError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      error instanceof Error
        ? error.message
        : "Internal server error"
    );
  }
};

export const displayAttendance = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const attendance =
      await getAllAttendance();

    return handleSuccess(
      res,
      StatusCodes.OK,
      "Attendance retrieved successfully",
      attendance
    );
  } catch (error: unknown) {
    return handleError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      error instanceof Error
        ? error.message
        : "Internal Server Error"
    );
  }
};