import { PrismaClient } from "@/generated/prisma"
import argon2 from "argon2"
import { v4 as uuidv4 } from "uuid"

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Démarrage du seeding...")

  // --- 1. Rôles ---
  // const [userRole, adminRole] = await Promise.all([
  //   prisma.user_role.upsert({
  //     where: { role_id: 0 },
  //     update: {},
  //     create: {
  //       id: uuidv4(),
  //       role_id: 0,
  //       role_name: "user",
  //       created_at: new Date(),
  //       updated_at: new Date(),
  //     },
  //   }),
  //   prisma.user_role.upsert({
  //     where: { role_id: 1 },
  //     update: {},
  //     create: {
  //       id: uuidv4(),
  //       role_id: 1,
  //       role_name: "admin",
  //       created_at: new Date(),
  //       updated_at: new Date(),
  //     },
  //   }),
  // ])

  // --- 2. Admin par défaut ---
  // await prisma.user.upsert({
  //   where: { email: "admin@gamerhub.io" },
  //   update: {},
  //   create: {
  //     user_id: uuidv4(),
  //     pseudonym: "AdminMaster",
  //     email: "admin@gamerhub.io",
  //     password_hash: await argon2.hash("admin123"),
  //     avatar_url: "https://source.unsplash.com/400x400/?face&admin",
  //     role_id: adminRole.role_id,
  //     created_at: new Date(),
  //     updated_at: new Date(),
  //   },
  // })

  // --- 3. Utilisateurs classiques ---
  // const pseudonyms = [
  //   "SpeedRunnerX",
  //   "NoobMaster69",
  //   "PixelBeast",
  //   "EliteSniper",
  //   "LootGoblin",
  //   "ComboKing",
  //   "TryHarder",
  //   "ShadowNinja",
  //   "JumpMaster",
  // ]

  // const userData = await Promise.all(
  //   pseudonyms.map(async (name) => ({
  //     user_id: uuidv4(),
  //     pseudonym: name,
  //     email: `${name.toLowerCase()}@gamerhub.io`,
  //     password_hash: await argon2.hash("password123"),
  //     avatar_url: `https://source.unsplash.com/400x400/?face&${name}`,
  //     role_id: userRole.role_id,
  //     created_at: new Date(),
  //     updated_at: new Date(),
  //   }))
  // )

  // await prisma.user.createMany({ data: userData, skipDuplicates: true })

  // --- 4. Jeux vidéo ---
  const games = [
    {
      title: "Elden Ring",
      category: "Action-RPG",
      description: "Un monde ouvert sombre et fantastique par FromSoftware.",
      release_date: new Date("2022-02-25"),
      image_url: "https://www.nintendo.com/eu/media/images/assets/nintendo_switch_2_games/eldenringtarnishededition/2x1_NSwitch2_EldenRing.jpg",
      platform: "PC/PS5/Xbox",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
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
      title: "Celeste",
      category: "Platformer",
      description: "Un jeu de plateforme exigeant avec une narration touchante.",
      release_date: new Date("2018-01-25"),
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Celeste_box_art_full.png/1200px-Celeste_box_art_full.png",
      platform: "PC/Switch/PS4/Xbox",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Rocket League",
      category: "Sport / Voiture",
      description: "Du football avec des voitures boostées !",
      release_date: new Date("2015-07-07"),
      image_url: "https://static.actugaming.net/media/2016/02/rocket-league-jaquette.jpg",
      platform: "PC/Console",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "The Legend of Zelda: Breath of the Wild",
      category: "Action-Aventure",
      description: "Explorez un monde immense dans ce chef-d'œuvre de Nintendo.",
      release_date: new Date("2017-03-03"),
      image_url: "https://media.senscritique.com/media/000016771881/0/the_legend_of_zelda_breath_of_the_wild.jpg",
      platform: "Switch",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "God of War Ragnarök",
      category: "Action",
      description: "Kratos et Atreus poursuivent leur quête mythologique nordique.",
      release_date: new Date("2022-11-09"),
      image_url: "https://psblog.fr/wp-content/uploads/2020/09/god-of-war-ragnarok-jaquette.webp",
      platform: "PS4/PS5",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Minecraft",
      category: "Sandbox",
      description: "Créez, explorez et survivez dans un monde infini de blocs.",
      release_date: new Date("2011-11-18"),
      image_url: "https://preview.redd.it/4lv9qrcjjui71.jpg?width=640&crop=smart&auto=webp&s=b9f3331e7b92555ca53ec801c820415262cb3fb9",
      platform: "PC/Console/Mobile",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Hollow Knight",
      category: "Metroidvania",
      description: "Explorez un royaume souterrain rempli de mystères et de défis.",
      release_date: new Date("2017-02-24"),
      image_url: "https://upload.wikimedia.org/wikipedia/en/3/32/Hollow_Knight_cover.jpg",
      platform: "PC/Switch/PS4/Xbox",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]

  for (const game of games) {
    await prisma.game.upsert({
      where: { title: game.title },
      update: {},
      create: { game_id: uuidv4(), ...game },
    })
  }

  const dbGames = await prisma.game.findMany()

  // --- 5. Utilisateurs existants ---
  const existingUsers = [
    { user_id: "4dc3a386-dd09-4c9f-b7ed-582875b8e7c5", pseudonym: "OrpheusInHell" },
    { user_id: "63824a3a-6a89-4d1b-86a9-339d74b2c302", pseudonym: "Arno" },
    { user_id: "764d387c-5020-4108-98cc-5ea258b5f4ee", pseudonym: "Julien06" },
    { user_id: "871e7e6b-f4b5-4290-8ad3-99b68ce3bb21", pseudonym: "Personne" },
  ]

  // --- 6. Challenges ---
  const challenges = Array.from({ length: 5 }).map((_, i) => ({
    challenge_id: uuidv4(),
    title: `Défi ${i + 1}`,
    description: `Description du défi ${i + 1}`,
    rules: `Règles du défi ${i + 1}`,
    user_id: existingUsers[i % existingUsers.length].user_id,
    game_id: dbGames[i % dbGames.length].game_id,
    created_at: new Date(),
    updated_at: new Date(),
  }))

  for (const c of challenges) {
    await prisma.challenge.upsert({
      where: { title: c.title },
      update: {},
      create: c,
    })
  }

  const dbChallenges = await prisma.challenge.findMany()

  // --- 7. Participations (soit vidéo, soit image) ---
  const participations = Array.from({ length: 6 }).map((_, i) => ({
    participation_id: uuidv4(),
    user_id: existingUsers[i % existingUsers.length].user_id,
    description: `Participation ${i + 1}`,
    challenge_id: dbChallenges[i % dbChallenges.length].challenge_id,
    created_at: new Date(),
    updated_at: new Date(),
    ...(i % 2 === 0
      ? { video_url: `https://www.youtube.com/watch?v=wblADNCFm6Q${i + 1}` }
      : { image_url: `https://siecledigital.fr/wp-content/uploads/2022/11/jeux-video-2022-1400x960${i + 1}.jpg` }),
  }))

  for (const p of participations) {
    const exists = await prisma.participation.findFirst({
      where: {
        description: p.description,
        user_id: p.user_id,
        challenge_id: p.challenge_id,
      },
    })
    if (!exists) await prisma.participation.create({ data: p })
  }

  const dbParticipations = await prisma.participation.findMany()

  // --- 8. Challenge votes ---
  for (let i = 0; i < 6; i++) {
    const user = existingUsers[i % existingUsers.length]
    const challenge = dbChallenges[(i + 1) % dbChallenges.length]

    const exists = await prisma.challenge_vote.findFirst({
      where: {
        user_id: user.user_id,
        challenge_id: challenge.challenge_id,
      },
    })

    if (!exists) {
      await prisma.challenge_vote.create({
        data: {
          challenge_vote_id: uuidv4(),
          user_id: user.user_id,
          challenge_id: challenge.challenge_id,
        },
      })
    }
  }

  // --- 9. Participation votes ---
  for (let i = 0; i < 6; i++) {
    const user = existingUsers[i % existingUsers.length]
    const participation = dbParticipations[(i + 2) % dbParticipations.length]

    const exists = await prisma.participation_vote.findFirst({
      where: {
        user_id: user.user_id,
        participation_id: participation.participation_id,
      },
    })

    if (!exists) {
      await prisma.participation_vote.create({
        data: {
          participation_vote_id: uuidv4(),
          user_id: user.user_id,
          participation_id: participation.participation_id,
        },
      })
    }
  }

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
