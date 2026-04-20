import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'

const prisma = new PrismaClient()

async function main() {
  // Création de 10 utilisateurs (role_id = 0)
  const users = await Promise.all([
    prisma.user.create({ data: { user_id: uuidv4(), pseudonym: 'GameLion', email: 'gamelion@example.com', password_hash: 'hashed', avatar_url: 'https://img.freepik.com/vecteurs-libre/illustration-du-garcon-aux-cheveux-roux-souriant_1308-176664.jpg', role_id: 0 } }),
    prisma.user.create({ data: { user_id: uuidv4(), pseudonym: 'PixelNinja', email: 'pixel.ninja@example.com', password_hash: 'hashed', avatar_url: 'https://img.freepik.com/vecteurs-libre/illustration-du-jeune-homme-souriant_1308-174669.jpg', role_id: 0 } }),
    prisma.user.create({ data: { user_id: uuidv4(), pseudonym: 'ShadowFox', email: 'shadow.fox@example.com', password_hash: 'hashed', avatar_url: 'https://img.freepik.com/vecteurs-libre/illustration-du-jeune-homme-souriant_1308-174401.jpg', role_id: 0 } }),
    prisma.user.create({ data: { user_id: uuidv4(), pseudonym: 'LunaBits', email: 'luna.bits@example.com', password_hash: 'hashed', avatar_url: 'https://img.freepik.com/vecteurs-libre/jeune-prince-tenue-traditionnelle_1308-174397.jpg', role_id: 0 } }),
    prisma.user.create({ data: { user_id: uuidv4(), pseudonym: 'ArcadeAce', email: 'arcade.ace@example.com', password_hash: 'hashed', avatar_url: 'https://img.freepik.com/psd-gratuit/rendering-3d-du-style-coiffure-pour-conception-avatar_23-2151869159.jpg', role_id: 0 } }),
    prisma.user.create({ data: { user_id: uuidv4(), pseudonym: 'BlitzWolf', email: 'blitz.wolf@example.com', password_hash: 'hashed', avatar_url: 'https://images.seeklogo.com/logo-png/48/1/mario-icon-logo-png_seeklogo-482092.png', role_id: 0 } }),
    prisma.user.create({ data: { user_id: uuidv4(), pseudonym: 'SilentStorm', email: 'silent.storm@example.com', password_hash: 'hashed', avatar_url: 'https://neondeco.fr/cdn/shop/products/neon-symbole-uchiwa.jpg?v=1666108059', role_id: 0 } }),
    prisma.user.create({ data: { user_id: uuidv4(), pseudonym: 'CrimsonMage', email: 'crimson.mage@example.com', password_hash: 'hashed', avatar_url: 'https://img.icons8.com/?size=512&id=6n6VZ02KZwP1&format=png', role_id: 0 } }),
    prisma.user.create({ data: { user_id: uuidv4(), pseudonym: 'NeonRacer', email: 'neon.racer@example.com', password_hash: 'hashed', avatar_url: 'https://images.seeklogo.com/logo-png/48/1/luigi-icon-logo-png_seeklogo-482093.png', role_id: 0 } }),
    prisma.user.create({ data: { user_id: uuidv4(), pseudonym: 'ByteBard', email: 'byte.bard@example.com', password_hash: 'hashed', avatar_url: 'https://papsesport.fr/wp-content/uploads/2025/01/cfae886e263126f685510e2f45b82970.jpg', role_id: 0 } }),
  ])

  // Récupérer tous les jeux de la BDD
  const games = await prisma.game.findMany()

  const challengesData = [
    {
      title: 'Boss Rush',
      gameTitle: 'Elden Ring',
      description: 'Affrontez tous les boss principaux sans retour au site de grâce.',
      rules: 'Aucune invocation, pas de sort, build pure mêlée.',
      video: 'https://www.youtube.com/watch?v=tdTKUMK8XOg'
    },
    {
      title: 'No Death Run',
      gameTitle: 'Elden Ring',
      description: 'Terminez le jeu sans mourir une seule fois.',
      rules: 'Armure de base, pas de magie, toutes zones obligatoires.',
      video: 'https://www.youtube.com/watch?v=ZQy8W7o2Gsk'
    },
    {
      title: 'Survie Hardcore',
      gameTitle: 'Minecraft',
      description: 'Survivre 100 jours en mode hardcore.',
      rules: 'Pas de mods, difficulté maximale.',
      video: 'https://www.youtube.com/watch?v=RFBV0EwF4_g'
    },
    {
      title: 'Challenge Redstone',
      gameTitle: 'Minecraft',
      description: 'Créer une porte automatique avec Redstone.',
      rules: 'Redstone uniquement.',
      image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/thumb/3/3a/Redstone_door.png/800px-Redstone_door.png'
    },
    {
      title: 'Victory Without Building',
      gameTitle: 'Fortnite',
      description: 'Gagnez une partie sans jamais construire.',
      rules: 'Pas de construction autorisée.',
      video: 'https://www.youtube.com/watch?v=pYVmJ2QUox8'
    },
    {
      title: 'Speedrun Any%',
      gameTitle: 'Dark Souls III',
      description: 'Finir le jeu rapidement.',
      rules: 'Tous glitchs autorisés.',
      video: 'https://www.youtube.com/watch?v=A2k5SVKZqsM'
    },
    {
      title: 'Naked Run',
      gameTitle: 'Dark Souls III',
      description: 'Finir le jeu sans armure.',
      rules: 'Pas de bouclier, pas d’armure.',
      image: 'https://i.imgur.com/adyY5Jp.jpg'
    },
    {
      title: 'No Divine Beasts',
      gameTitle: 'Legend of Zelda',
      description: 'Terminez le jeu sans activer les créatures divines.',
      rules: 'Juste Link contre Ganon.',
      video: 'https://www.youtube.com/watch?v=XZn7gD3yrIg'
    },
    {
      title: 'Sniper Elite',
      gameTitle: 'Valorant',
      description: 'Obtenez 3 kills consécutifs avec l’Operator.',
      rules: 'Uniquement Operator.',
      video: 'https://www.youtube.com/watch?v=d5PqlhK2vi0'
    },
    {
      title: 'Millionnaire en 1 an',
      gameTitle: 'Stardew Valley',
      description: 'Gagnez 1 million d’or dans la 1ère année.',
      rules: 'Sans triche ni mods.',
      image: 'https://i.imgur.com/m8qfLV5.png'
    }
  ]

  for (const ch of challengesData) {
    const game = games.find(g => g.title === ch.gameTitle)
    const author = users[Math.floor(Math.random() * users.length)]

    if (!game) continue

    const challenge = await prisma.challenge.create({
      data: {
        challenge_id: uuidv4(),
        title: ch.title,
        description: ch.description,
        rules: ch.rules,
        user_id: author.user_id,
        game_id: game.game_id
      }
    })

    const participant = users[Math.floor(Math.random() * users.length)]

    await prisma.participation.create({
      data: {
        participation_id: uuidv4(),
        user_id: participant.user_id,
        description: `Participation au défi « ${ch.title} »`,
        challenge_id: challenge.challenge_id,
        video_url: ch.video || null,
        image_url: ch.image || null
      }
    })
  }
}

main()
  .then(() => console.log('Seed terminé ✅'))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
