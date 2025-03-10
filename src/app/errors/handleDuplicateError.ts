import { TErrorSources, TGenerateErrorResponse } from '../interface/error';

const handleDuplicateError = (err: any): TGenerateErrorResponse => {
  const match = err.message.match(/"([^"]*)"/);
  const extendMessage = match & match[1];
  const errorSources: TErrorSources = [
    {
      path: '',
      message: `${extendMessage} id already exists`,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: 'Invalid->Duplicate Error',
    errorSources,
  };
};

export default handleDuplicateError;
