import { Response } from "express";

interface SuccessResponse<T> {
  status: number;
  success: boolean;
  message: string;
  data: T;
}

interface ErrorResponse {
  status: number;
  success: boolean;
  error: string;
}

const buildSuccessResponse = <T>(
  statusCode: number,
  message: string,
  data: T
): SuccessResponse<T> => {
  return {
    status: statusCode,
    success: true,
    message,
    data,
  };
};

const buildErrorResponse = (
  statusCode: number,
  error: string
): ErrorResponse => {
  return {
    status: statusCode,
    success: false,
    error,
  };
};

const handleSuccess = <T>(
  res: Response,
  statusCode: number = 200,
  message: string = "Success.",
  data: T
) => {
  const response = buildSuccessResponse(statusCode, message, data);

  return res.status(statusCode).json(response);
};

const handleError = (
  res: Response,
  statusCode: number = 500,
  error: unknown = "Error."
) => {
  const response = buildErrorResponse(
    statusCode,
    error instanceof Error ? error.message : String(error)
  );

  return res.status(statusCode).json(response);
};

export {
  handleSuccess,
  handleError,
};