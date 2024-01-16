import { NextFunction, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { DB_ERRORS } from '../utils/errors/db-errors.utils';
import { GeneralError } from '../utils/errors/general.error';
import { Error as mongooseError } from 'mongoose';

interface ErrorResponse {
  errorTraceId: string;
  status: string;
  clientError: string;
  internalError?: string;
}

export const handleError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errorResponse: ErrorResponse = {
    errorTraceId: uuid(),
    status: 'ERROR',
    clientError:
      'Please contact your system administrator, and send this error trace ID for their reference. Thank you.',
  };

  let errorCode = 500;
  if (err instanceof GeneralError) {
    errorResponse.clientError = err.message;
    errorResponse.internalError = err.supportingError;
    errorCode = err.getCode() ? err.getCode() : 500;
  }
  console.log(err);
  if (err.message === 'NoDocumentFound') {
    errorResponse.clientError = 'Document not found.';
    errorCode = 404;
  }

  if (err instanceof mongooseError) {
    const dbError = DB_ERRORS.find((dbErr) => dbErr.code === err.name);

    errorResponse.status = 'ERROR';
    errorResponse.clientError = dbError ? dbError.message : '';
    errorResponse.internalError = err.name;

    errorCode = 400;
  }

  console.error('Error Occured:', { ...errorResponse, err });
  res.status(errorCode).json(errorResponse);
};
