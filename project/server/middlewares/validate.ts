import { Request, Response, NextFunction, RequestHandler } from 'express';
import Joi from 'joi';

export const validate = (
  schema: Joi.ObjectSchema,
  property: 'body' | 'params' | 'query' = 'body'
): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req[property], { 
      abortEarly: false,
      allowUnknown: false,
      stripUnknown: true
    });

    if (error) {
      const errorMessage = error.details
        .map(detail => detail.message)
        .join(', ');
      const err = new Error(errorMessage);
      (err as any).status = 400;
      return next(err);
    }

    // Assign the validated values to the request object
    req[property] = value;
    next();
  };
};
