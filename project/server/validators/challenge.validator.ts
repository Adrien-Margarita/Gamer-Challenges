import Joi from 'joi';

export const challengeSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  rules: Joi.string().required(),
  game_id: Joi.string().uuid().required(),
  image_url: Joi.string().allow('').optional(),
});
