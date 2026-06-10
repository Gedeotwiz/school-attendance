import { Request, Response } from "express";
import StatusCodes from "http-status-codes";

import {
  createSession,
  getSessions,
  getSessionById,
  updateSession,
  deleteSession,
} from "./attendanceRepository";

import { handleError, handleSuccess } from "../../utils/responseUtils";


export const createAttendanceSession = async (
  req: Request,
  res: Response
) => {
  try {
    const session = await createSession(req.body);

    return handleSuccess(
      res,
      StatusCodes.CREATED,
      "Session created successfully",
      session
    );
  } catch (error: unknown) {
    return handleError(res, StatusCodes.INTERNAL_SERVER_ERROR, "Error creating session");
  }
};

export const getAllAttendanceSessions = async (
  req: Request,
  res: Response
) => {
  try {
    const sessions = await getSessions();

    return handleSuccess(
      res,
      StatusCodes.OK,
      "Sessions retrieved successfully",
      sessions
    );
  } catch (error) {
    return handleError(res, StatusCodes.INTERNAL_SERVER_ERROR, "Error fetching sessions");
  }
};

export const getSingleSession = async (req: Request, res: Response) => {
  try {
      const id = req.params.id;
    
        if (!id || Array.isArray(id)) {
          return handleError(res,StatusCodes.BAD_REQUEST,'Invalid Id')
        }
    const session = await getSessionById(id);

    if (!session) {
      return handleError(res, StatusCodes.NOT_FOUND, "Session not found");
    }

    return handleSuccess(
      res,
      StatusCodes.OK,
      "Session retrieved successfully",
      session
    );
  } catch (error) {
    return handleError(res, StatusCodes.INTERNAL_SERVER_ERROR, "Error fetching session");
  }
};


export const updateAttendanceSession = async (
  req: Request,
  res: Response
) => {
  try {
      const id = req.params.id;
    
        if (!id || Array.isArray(id)) {
          return handleError(res,StatusCodes.BAD_REQUEST,'Invalid Id')
        }
    const session = await updateSession(id, req.body);

    if (!session) {
      return handleError(res, StatusCodes.NOT_FOUND, "Session not found");
    }

    return handleSuccess(
      res,
      StatusCodes.OK,
      "Session updated successfully",
      session
    );
  } catch (error) {
    return handleError(res, StatusCodes.INTERNAL_SERVER_ERROR, "Error updating session");
  }
};


export const deleteAttendanceSession = async (
  req: Request,
  res: Response
) => {
  try {
      const id = req.params.id;
    
        if (!id || Array.isArray(id)) {
          return handleError(res,StatusCodes.BAD_REQUEST,'Invalid Id')
        }
    const session = await deleteSession(id);

    if (!session) {
      return handleError(res, StatusCodes.NOT_FOUND, "Session not found");
    }

    return handleSuccess(
      res,
      StatusCodes.OK,
      "Session deleted successfully",
      session
    );
  } catch (error) {
    return handleError(res, StatusCodes.INTERNAL_SERVER_ERROR, "Error deleting session");
  }
};