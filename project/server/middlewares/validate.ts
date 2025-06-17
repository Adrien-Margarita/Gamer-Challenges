import { Request, Response, NextFunction, RequestHandler } from 'express';
import Joi from 'joi';

export const validate = (
  schema: Joi.ObjectSchema,
  property: 'body' | 'params' | 'query' = 'body'
): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req[property], { abortEarly: false});

    if (error) {
      return next(error);
    }

    // Assigne les valeurs validées (utile si le schéma transforme les données)
    req[property] = value;

    next();
  };
};
