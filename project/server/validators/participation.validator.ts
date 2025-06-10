import Joi from 'joi';

export const participationSchema = Joi.object({
  user_id: Joi.string().uuid().required(),
  video_url: Joi.string().uri().optional().allow(null),
  image_url: Joi.string().uri().optional().allow(null),
  description: Joi.string().required(),
  challenge_id: Joi.string().uuid().required(),
});
