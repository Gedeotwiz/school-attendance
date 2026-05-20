/** @format */

import { Request, Response } from 'express';
import {
  createStudent,
  deleteStudent,
  findAllStudents,
  updateStudent,
} from './studentRepository';
import { handleError, handleSuccess } from '../../utils/responseUtils';
import { StatusCodes } from 'http-status-codes';

const registerStudent = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  try {
    const student = await createStudent(req.body);
    return handleSuccess(
      res,
      StatusCodes.CREATED,
      'Student successfuly registed!',
      student,
    );
  } catch (error) {
    return handleError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      `Issue is: ${error}`,
    );
  }
};

const displayStudents = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  try {
    const students = await findAllStudents();
    return handleSuccess(
      res,
      StatusCodes.OK,
      'Students successfuly retrived!',
      students,
    );
  } catch (error) {
    return handleError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      `Issue is: ${error}`,
    );
  }
};

const removeStudent = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  try {
    const id = req.params.id;
     if (!id || Array.isArray(id)) {
      return handleError(res,StatusCodes.BAD_REQUEST,'Invalid Id')
    }
    const student = await deleteStudent(id);
    if (!student) {
      return handleError(res,StatusCodes.NOT_FOUND,'Student not found')
    }

     return handleSuccess(res,StatusCodes.OK,'Student deleted successfuly',{})
  } catch (error) {
     return handleError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      `Issue is: ${error}`,
    );
  }
};

const editStudent = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const id = req.params.id;

    if (!id || Array.isArray(id)) {
      return handleError(res,StatusCodes.BAD_REQUEST,'Invalid Id')
    }

    const student = await updateStudent(id, req.body);

    if (!student) {
      return handleError(res,StatusCodes.NOT_FOUND,'Student not found')
    }

    return handleSuccess(res,StatusCodes.OK,'Student successfuly updated',student)
  } catch (error) {
     return handleError(
      res,
      StatusCodes.INTERNAL_SERVER_ERROR,
      `Issue is: ${error}`,
    );
  }
};

export { registerStudent, displayStudents ,removeStudent,editStudent};
