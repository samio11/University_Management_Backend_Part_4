export type TErrorSources = {
  path: string | number;
  message: string;
}[];

export type TGenerateErrorResponse = {
  statusCode: number;
  message: string;
  errorSources: TErrorSources;
};
