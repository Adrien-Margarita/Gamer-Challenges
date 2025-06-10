import Joi from 'joi';

export const userSchema = Joi.object({
  pseudonym: Joi.string().required(),
  email: Joi.string().email().required(),
  password_hash: Joi.string().required(), // On peut renommer en password en frontend si besoin
  avatar_url: Joi.string().uri().optional().allow(null),
});
