import { PrismaClient } from "@/generated/prisma"
import argon2 from "argon2"
import { v4 as uuidv4 } from "uuid"

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Démarrage du seeding...")

  // --- 1. Rôles ---
  const userRole = await prisma.user_role.upsert({
    where: { role_id: 0 },
    update: {
      role_name: "user",
      updated_at: new Date(),
    },
    create: {
      id: uuidv4(),
      role_id: 0,
      role_name: "user",
      created_at: new Date(),
      updated_at: new Date(),
    },
  })

  const adminRole = await prisma.user_role.upsert({
    where: { role_id: 1 },
    update: {
      role_name: "admin",
      updated_at: new Date(),
    },
    create: {
      id: uuidv4(),
      role_id: 1,
      role_name: "admin",
      created_at: new Date(),
      updated_at: new Date(),
    },
  })

  // --- 2. Utilisateurs de référence ---
  const defaultPasswordHash = await argon2.hash("password123")
  const frochPasswordHash = await argon2.hash("admin")
  const userSeeds = [
    {
      user_id: "4dc3a386-dd09-4c9f-b7ed-582875b8e7c5",
      pseudonym: "OrpheusInHell",
      email: "orpheusinhell@gamerhub.io",
      avatar_url: "https://images.unsplash.com/photo-1633545499679-bd1f3f40df62?auto=format&fit=crop&w=800&q=80",
      role_id: userRole.role_id,
    },
    {
      user_id: "2a9a78dc-f0d6-4b45-86d4-f43211d9a9f0",
      pseudonym: "Froch",
      email: "adrien-margarita@hotmail.fr",
      avatar_url: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=800&q=80",
      role_id: adminRole.role_id,
    },
    {
      user_id: "63824a3a-6a89-4d1b-86a9-339d74b2c302",
      pseudonym: "Arno",
      email: "arno@gamerhub.io",
      avatar_url: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80",
      role_id: userRole.role_id,
    },
    {
      user_id: "764d387c-5020-4108-98cc-5ea258b5f4ee",
      pseudonym: "Julien06",
      email: "julien06@gamerhub.io",
      avatar_url: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=80",
      role_id: userRole.role_id,
    },
    {
      user_id: "871e7e6b-f4b5-4290-8ad3-99b68ce3bb21",
      pseudonym: "Personne",
      email: "personne@gamerhub.io",
      avatar_url: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
      role_id: userRole.role_id,
    },
    {
      user_id: "1ec77be2-8674-4d1b-bf4e-a6e74f3db0fb",
      pseudonym: "NeonSniper",
      email: "neonsniper@gamerhub.io",
      avatar_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      role_id: userRole.role_id,
    },
    {
      user_id: "5c0f5f26-59c2-4eb1-a421-5232ffb132f3",
      pseudonym: "CraftQueen",
      email: "craftqueen@gamerhub.io",
      avatar_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      role_id: userRole.role_id,
    },
    {
      user_id: "2618e7a4-f4f7-4aa3-b4a7-a4abf8f7067e",
      pseudonym: "ClipMaster",
      email: "clipmaster@gamerhub.io",
      avatar_url: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=800&q=80",
      role_id: userRole.role_id,
    },
    {
      user_id: "43ec9475-a7d7-4d73-a8ff-0ac0e0f9ea43",
      pseudonym: "SpeedLynx",
      email: "speedlynx@gamerhub.io",
      avatar_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      role_id: userRole.role_id,
    },
    {
      user_id: "5fcaf4b3-3d8d-4a10-b1b6-339087d68144",
      pseudonym: "LoreHunter",
      email: "lorehunter@gamerhub.io",
      avatar_url: "https://images.unsplash.com/photo-1542204625-de293a5a9b2a?auto=format&fit=crop&w=800&q=80",
      role_id: userRole.role_id,
    },
  ]

  for (const userSeed of userSeeds) {
    await prisma.user.upsert({
      where: { user_id: userSeed.user_id },
      update: {
        pseudonym: userSeed.pseudonym,
        email: userSeed.email,
        avatar_url: userSeed.avatar_url,
        role_id: userSeed.role_id,
        password_hash:
          userSeed.pseudonym === "Froch" ? frochPasswordHash : defaultPasswordHash,
        updated_at: new Date(),
      },
      create: {
        user_id: userSeed.user_id,
        pseudonym: userSeed.pseudonym,
        email: userSeed.email,
        password_hash:
          userSeed.pseudonym === "Froch" ? frochPasswordHash : defaultPasswordHash,
        avatar_url: userSeed.avatar_url,
        role_id: userSeed.role_id,
        created_at: new Date(),
        updated_at: new Date(),
      },
    })
  }

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
      image_url: "https://static.actugaming.net/media/2020/06/valorant-889x500.jpeg",
      platform: "PC",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Celeste",
      category: "Platformer",
      description: "Un jeu de plateforme exigeant avec une narration touchante.",
      release_date: new Date("2018-01-25"),
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Celeste_box_art_full.png/960px-Celeste_box_art_full.png",
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
      image_url: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_TheLegendOfZeldaBreathOfTheWild_image1600w.jpg",
      platform: "Switch",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "God of War Ragnarök",
      category: "Action",
      description: "Kratos et Atreus poursuivent leur quête mythologique nordique.",
      release_date: new Date("2022-11-09"),
      image_url: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2322010/capsule_616x353.jpg?t=1776465233",
      platform: "PS4/PS5",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Minecraft",
      category: "Sandbox",
      description: "Créez, explorez et survivez dans un monde infini de blocs.",
      release_date: new Date("2011-11-18"),
      image_url: "https://gaming-cdn.com/images/products/442/orig/minecraft-java-bedrock-edition-pc-mac-cover.jpg?v=1769503807",
      platform: "PC/Console/Mobile",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Hollow Knight",
      category: "Metroidvania",
      description: "Explorez un royaume souterrain rempli de mystères et de défis.",
      release_date: new Date("2017-02-24"),
      image_url: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/wiiu_download_software_5/H2x1_WiiUDS_HollowKnight_image1600w.jpg",
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
  const existingUsers = userSeeds.map(({ user_id, pseudonym }) => ({ user_id, pseudonym }))

  // --- 6. Challenges ---
  const gameByTitle = new Map(dbGames.map((g) => [g.title, g]))
  const challengeTemplates = [
    {
      title: "Elden Ring - No Hit Margit",
      gameTitle: "Elden Ring",
      description: "Battez Margit sans prendre de degats, video complete obligatoire.",
      rules: "Pas d'invocation, pas de magie a distance, equipement libre.",
    },
    {
      title: "Valorant - Ace au Vandal",
      gameTitle: "Valorant",
      description: "Realisez un ace en ranked avec Vandal uniquement.",
      rules: "Match competitif, clip brut de 45 secondes minimum.",
    },
    {
      title: "Celeste - Chapitre 1 en moins de 2m",
      gameTitle: "Celeste",
      description: "Speedrun du chapitre 1 avec timer visible.",
      rules: "Aucun mod, version stable du jeu.",
    },
    {
      title: "Rocket League - Double Tap propre",
      gameTitle: "Rocket League",
      description: "Marquez un double tap en match classe 3v3.",
      rules: "Replay ou clip in-game non monte.",
    },
    {
      title: "Zelda BOTW - Lynel sans degat",
      gameTitle: "The Legend of Zelda: Breath of the Wild",
      description: "Vaincre un Lynel argent sans perdre de coeur.",
      rules: "Aucune nourriture pendant le combat.",
    },
    {
      title: "God of War - Combo 100 hits",
      gameTitle: "God of War Ragnarök",
      description: "Atteindre un combo de 100 coups sur une sequence de combat.",
      rules: "Difficulte normale minimum, HUD visible.",
    },
    {
      title: "Minecraft - Base survie jour 1",
      gameTitle: "Minecraft",
      description: "Construisez une base fonctionnelle avant la premiere nuit.",
      rules: "Mode survie vanilla, pas de commande.",
    },
    {
      title: "Hollow Knight - Hornet sans toucher",
      gameTitle: "Hollow Knight",
      description: "Battez Hornet sans vous faire toucher.",
      rules: "Aucun charm offensif equipe.",
    },
  ]

  const challenges = challengeTemplates
    .map((template, i) => {
      const game = gameByTitle.get(template.gameTitle)
      if (!game) return null
      return {
        challenge_id: uuidv4(),
        title: template.title,
        description: template.description,
        rules: template.rules,
        user_id: existingUsers[i % existingUsers.length].user_id,
        game_id: game.game_id,
        created_at: new Date(),
        updated_at: new Date(),
      }
    })
    .filter((c): c is NonNullable<typeof c> => c !== null)

  for (const c of challenges) {
    await prisma.challenge.upsert({
      where: { title: c.title },
      update: {},
      create: c,
    })
  }

  const dbChallenges = await prisma.challenge.findMany()

  // --- 7. Participations (clips/images proches de vrais contenus communautaires) ---
  const challengeByTitle = new Map(dbChallenges.map((c) => [c.title, c]))
  const participationTemplates = [
    {
      challengeTitle: "Elden Ring - No Hit Margit",
      description: "No-hit valide sur Margit en katana, tentative propre du debut a la fin.",
      media: { video_url: "https://www.youtube.com/watch?v=R4p1ZVtHfFo" },
    },
    {
      challengeTitle: "Valorant - Ace au Vandal",
      description: "Ace en solo queue sur Ascent, crosshair visible et audio equipe.",
      media: { video_url: "https://www.youtube.com/watch?v=vQw8cFf9B8U" },
    },
    {
      challengeTitle: "Celeste - Chapitre 1 en moins de 2m",
      description: "Run en 1:52 avec timer dans l'overlay et trajectoires optimales.",
      media: { video_url: "https://www.youtube.com/watch?v=QfV4fL9Qm6M" },
    },
    {
      challengeTitle: "Rocket League - Double Tap propre",
      description: "Double tap en 3v3 classe avec reprise du wall et finition backboard.",
      media: { video_url: "https://www.youtube.com/watch?v=3YtxID9OgRQ" },
    },
    {
      challengeTitle: "Zelda BOTW - Lynel sans degat",
      description: "Lynel argent no-damage, gestion stamina et timing parade.",
      media: { video_url: "https://www.youtube.com/watch?v=CiSwOkat_Uw" },
    },
    {
      challengeTitle: "God of War - Combo 100 hits",
      description: "Combo 112 hits avec Atreus en soutien, sequence continue.",
      media: { video_url: "https://www.youtube.com/watch?v=EE-4GvjKcfs" },
    },
    {
      challengeTitle: "Minecraft - Base survie jour 1",
      description: "Base en chene et pierre avant la nuit avec lit, coffre et four.",
      media: { image_url: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=1200&q=80" },
    },
    {
      challengeTitle: "Hollow Knight - Hornet sans toucher",
      description: "Combat Hornet sans hit avec positionnement court-portee.",
      media: { video_url: "https://www.youtube.com/watch?v=7ITtPPE-pXE" },
    },
    {
      challengeTitle: "Minecraft - Base survie jour 1",
      description: "Version alternative de la base: ferme ble et enclos des la nuit 1.",
      media: { image_url: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80" },
    },
    {
      challengeTitle: "Valorant - Ace au Vandal",
      description: "Ace avec reprise 1v3 en fin de round, utilitaire uniquement pour prise info.",
      media: { video_url: "https://www.youtube.com/watch?v=9KQw8a8n8dY" },
    },
  ]

  const participations = participationTemplates
    .map((template, i) => {
      const challenge = challengeByTitle.get(template.challengeTitle)
      if (!challenge) return null
      return {
        participation_id: uuidv4(),
        user_id: existingUsers[i % existingUsers.length].user_id,
        description: template.description,
        challenge_id: challenge.challenge_id,
        created_at: new Date(),
        updated_at: new Date(),
        ...template.media,
      }
    })
    .filter((p): p is NonNullable<typeof p> => p !== null)

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
  for (let i = 0; i < dbParticipations.length; i++) {
    const participation = dbParticipations[i]

    // 3 votes par participation, en evitant l'auteur de la participation
    for (let offset = 1; offset <= 3; offset++) {
      const voter = existingUsers[(i + offset) % existingUsers.length]

      if (voter.user_id === participation.user_id) continue

      const exists = await prisma.participation_vote.findFirst({
        where: {
          user_id: voter.user_id,
          participation_id: participation.participation_id,
        },
      })

      if (!exists) {
        await prisma.participation_vote.create({
          data: {
            participation_vote_id: uuidv4(),
            user_id: voter.user_id,
            participation_id: participation.participation_id,
          },
        })
      }
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
