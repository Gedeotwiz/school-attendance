import { Request, Response, NextFunction } from "express";
import { checkEmail, findAllStudents } from "../modules/student/studentRepository";
import { handleError } from "../utils/responseUtils";
import StatusCodes from "http-status-codes";

const studentExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const student = await checkEmail(req.body.email);

    if (student) {
      return handleError(
        res,
        StatusCodes.CONFLICT,
        "Student already exists"
      );
    }

    return next();
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

const studentsAvailable = async(req:Request,res:Response,next:NextFunction):Promise<Response|void> =>{
    try {
    const students = await findAllStudents()

    if (!students || students.length == 0) {
      return handleError(
        res,
        StatusCodes.NOT_FOUND,
        "Student not found"
      );
    }

    return next();
  } catch (error: unknown) {
    return handleError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      error instanceof Error
        ? error.message
        : "Internal server error"
    );
  }
}

export {studentExist,studentsAvailable}