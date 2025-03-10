import mongoose from 'mongoose';
import { TErrorSources, TGenerateErrorResponse } from '../interface/error';

const handleCastError = (
  err: mongoose.Error.CastError,
): TGenerateErrorResponse => {
  const errorSources: TErrorSources = [
    {
      path: err?.path,
      message: err?.message,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: 'Invalid->Cast Error',
    errorSources,
  };
};

export default handleCastError;
