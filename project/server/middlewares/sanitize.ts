import { Request, Response, NextFunction } from "express";

/**
 * Middleware : supprime les champs indésirables du body
 */
export const sanitizeBody = (fieldsToRemove: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    for (const field of fieldsToRemove) {
      if (field in req.body) {
        delete req.body[field];
      }
    }
    next();
  };
};