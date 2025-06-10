import Joi from 'joi';

export const gameSchema = Joi.object({
  title: Joi.string().required(),
  category: Joi.string().required(),
  description: Joi.string().required(),
  release_date: Joi.date().iso().required(),
  image_url: Joi.string().uri().optional().allow(null),
  platform: Joi.string().required(),
});
