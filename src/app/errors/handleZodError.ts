import { ZodError, ZodIssue } from 'zod';
import { TErrorSources, TGenerateErrorResponse } from '../interface/error';

const handleZodError = (err: ZodError): TGenerateErrorResponse => {
  const errorSources: TErrorSources = err.issues.map((x: ZodIssue) => {
    return {
      path: x?.path[x?.path?.length - 1],
      message: x?.message,
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    message: 'Invalid-> Zod Error',
    errorSources,
  };
};

export default handleZodError;
