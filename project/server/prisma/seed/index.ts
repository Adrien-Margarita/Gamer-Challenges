import { PrismaClient } from "@/generated/prisma"
import argon2 from "argon2"
import { v4 as uuidv4 } from "uuid"

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Démarrage du seeding...")

  // --- 1. Rôles ---
  const [userRole, adminRole] = await Promise.all([
    prisma.user_role.upsert({
      where: { role_id: 0 },
      update: {},
      create: {
        id: uuidv4(),
        role_id: 0,
        role_name: "user",
        created_at: new Date(),
        updated_at: new Date(),
      },
    }),
    prisma.user_role.upsert({
      where: { role_id: 1 },
      update: {},
      create: {
        id: uuidv4(),
        role_id: 1,
        role_name: "admin",
        created_at: new Date(),
        updated_at: new Date(),
      },
    }),
  ])

  // --- 2. Admin par défaut ---
  await prisma.user.upsert({
    where: { email: "admin@gamerhub.io" },
    update: {},
    create: {
      user_id: uuidv4(),
      pseudonym: "AdminMaster",
      email: "admin@gamerhub.io",
      password_hash: await argon2.hash("admin123"),
      avatar_url: "https://source.unsplash.com/400x400/?face&admin",
      role_id: adminRole.role_id,
      created_at: new Date(),
      updated_at: new Date(),
    },
  })

  // --- 3. Utilisateurs classiques ---
  const pseudonyms = [
    "SpeedRunnerX",
    "NoobMaster69",
    "PixelBeast",
    "EliteSniper",
    "LootGoblin",
    "ComboKing",
    "TryHarder",
    "ShadowNinja",
    "JumpMaster",
  ]

  const userData = await Promise.all(
    pseudonyms.map(async (name) => ({
      user_id: uuidv4(),
      pseudonym: name,
      email: `${name.toLowerCase()}@gamerhub.io`,
      password_hash: await argon2.hash("password123"),
      avatar_url: `https://source.unsplash.com/400x400/?face&${name}`,
      role_id: userRole.role_id,
      created_at: new Date(),
      updated_at: new Date(),
    }))
  )

  await prisma.user.createMany({ data: userData, skipDuplicates: true })

  // --- 4. Jeux vidéo ---
  const games = [
    {
      game_id: uuidv4(),
      title: "Elden Ring",
      category: "Action-RPG",
      description: "Un monde ouvert sombre et fantastique par FromSoftware.",
      release_date: new Date("2022-02-25"),
      image_url: "hhttps://www.nintendo.com/eu/media/images/assets/nintendo_switch_2_games/eldenringtarnishededition/2x1_NSwitch2_EldenRing.jpg",
      platform: "PC/PS5/Xbox",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      game_id: uuidv4(),
      title: "Valorant",
      category: "FPS",
      description: "Un shooter compétitif en 5v5 avec des agents uniques.",
      release_date: new Date("2020-06-02"),
      image_url: "https://cdn.sortiraparis.com/images/80/66131/1103306-valorant-le-jeu-video-signe-riot-games-est-disponible.jpg",
      platform: "PC",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      game_id: uuidv4(),
      title: "Celeste",
      category: "Platformer",
      description: "Un jeu de plateforme exigeant avec une narration touchante.",
      release_date: new Date("2018-01-25"),
      image_url: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Celeste_image1600w.jpg",
      platform: "PC/Switch/PS4/Xbox",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      game_id: uuidv4(),
      title: "Rocket League",
      category: "Sport / Voiture",
      description: "Du football avec des voitures boostées !",
      release_date: new Date("2015-07-07"),
      image_url: "https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S3_2560x1440-18eac9b5df1028fdcd5bad480ab6b085",
      platform: "PC/Console",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]

  await prisma.game.createMany({ data: games, skipDuplicates: true })

  console.log("✅ Seed terminé avec succès.")
}

main()
  .catch((err) => {
    console.error("❌ Erreur dans le seed :", err)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
    console.log("🌱 Fin du seeding.")
  })
