import Joi from 'joi';

export const challengeVoteCreateSchema = Joi.object({
  user_id: Joi.string().uuid().required(),
  challenge_id: Joi.string().uuid().required(),
});
