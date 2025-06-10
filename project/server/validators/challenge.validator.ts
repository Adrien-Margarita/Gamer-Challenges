import Joi from 'joi';

export const challengeSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  rules: Joi.string().required(),
  user_id: Joi.string().uuid().required(),
  game_id: Joi.string().uuid().required(),
});
