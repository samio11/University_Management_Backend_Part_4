import mongoose from 'mongoose';
import { TErrorSources, TGenerateErrorResponse } from '../interface/error';

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenerateErrorResponse => {
  const errorSources: TErrorSources = Object.values(err.errors).map(
    (x: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: x?.path,
        message: x?.message,
      };
    },
  );
  const statusCode = 400;
  return {
    statusCode,
    message: 'Invalid->Validation Error',
    errorSources,
  };
};
export default handleValidationError;
