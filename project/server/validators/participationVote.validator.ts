import Joi from 'joi';

export const participationVoteCreateSchema = Joi.object({
  user_id: Joi.string().uuid().required(),
  participation_id: Joi.string().uuid().required(),
});
