/** @format */

import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';
import StatusCodes from 'http-status-codes';
import { handleError } from '../utils/responseUtils';

export const routeBodyValidation =
  (schema: ObjectSchema) =>
  async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { error } = schema.validate(req.body, {
        abortEarly: false,
      });

      if (error) {
        const errorMessage = `${
          error.details?.[0]?.message || 'Validation error'
        } in the body`;

        return handleError(res, StatusCodes.BAD_REQUEST, errorMessage);
      }
      return next();
    } catch (error: unknown) {
      return handleError(
        res,
        StatusCodes.INTERNAL_SERVER_ERROR,
        error instanceof Error ? error.message : 'Internal Server Error',
      );
    }
  };
