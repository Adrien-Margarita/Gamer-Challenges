import { test, expect } from "@playwright/test";

test("E2E-001 - la page Jeux affiche une liste depuis l'API", async ({ page, request }) => {
  // Pré-vérification: on échoue immédiatement avec un message explicite
  // si le backend n'est pas démarré avant d'exécuter le parcours UI.
  try {
    const backendCheck = await request.get("http://localhost:3000/api/games", {
      timeout: 5000,
    });

    expect(backendCheck.status()).toBe(200);
  } catch {
    throw new Error(
      "Backend indisponible sur http://localhost:3000/api. Démarre le serveur backend avant pnpm e2e."
    );
  }

  // Ce test couvre un parcours utilisateur minimal:
  // 1) ouvrir l'application
  // 2) aller sur la page /games
  // 3) verifier que l'API repond et qu'une carte de jeu est visible
  // On prépare l'attente AVANT la navigation pour éviter de rater la requête.
  const gamesResponsePromise = page.waitForResponse(
    (response) =>
      response.url().includes("/api/games") &&
      response.request().method() === "GET" &&
      response.status() === 200
  );

  await page.goto("/games");

  const gamesResponse = await gamesResponsePromise;

  expect(gamesResponse.status()).toBe(200);
  await expect(page.getByRole("heading", { name: "Tous les jeux" })).toBeVisible();

  // Une carte de jeu contient un lien vers /game/:id.
  await expect(page.locator('a[href^="/game/"]').first()).toBeVisible();
});
