/// <reference types="jest" />

import { participationSchema } from "@/validators/participation.validator";

describe("Unit - participationSchema", () => {
  test("refuse une participation sans video_url et sans image_url", () => {
    // Cas volontairement incomplet: la règle métier exige au moins un media.
    const payloadSansMedia = {
      description: "Participation sans media",
      challenge_id: "11111111-1111-1111-1111-111111111111",
    };

    const result = participationSchema.validate(payloadSansMedia, {
      abortEarly: false,
    });

    // Le test valide la règle clé du schema: video_url OU image_url est obligatoire.
    expect(result.error).toBeDefined();
    expect(result.error?.message).toContain("must contain at least one of");
  });
});
