import { Request, Response, NextFunction } from 'express';

const errorHandler = (
  err: IErrorDetails,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (res.headersSent) {
    return next(err);
  }

  console.error(err);

  const status = err.status || 500;
  const message = err.message || 'Une erreur est survenue sur le serveur';
  const details = err.details || undefined;

  res.status(status).json({
    message,
    details,
  });
};

export default errorHandler;
