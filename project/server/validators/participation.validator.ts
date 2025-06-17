import Joi from "joi";

export const participationSchema = Joi.object({
  user_id: Joi.forbidden(), // ← interdit côté client, injecté côté serveur
  video_url: Joi.string().uri().optional().allow(null, ""), // ← accepte null et ""
  image_url: Joi.string().uri().optional().allow(null, ""), // ← idem
  description: Joi.string().required(),
  challenge_id: Joi.string().uuid().required(),
}).or("video_url", "image_url"); // ← au moins l’un des deux requis
