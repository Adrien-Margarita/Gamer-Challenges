import { v4 as uuidv4 } from 'uuid';
import argon2 from 'argon2';
import { PrismaClient } from "@/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Début du seeding...');

  // Nettoyer les données existantes
  await prisma.user.deleteMany();
  await prisma.game.deleteMany();
  
  console.log('🧹 Données existantes supprimées');

  // Créer les utilisateurs
  const users = [
    {
      user_id: uuidv4(),
      pseudonym: 'GamerPro2024',
      email: 'gamerpro@example.com',
      password_hash: await argon2.hash('password123'),
      avatar_url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=face'
    },
    {
      user_id: uuidv4(),
      pseudonym: 'EliteSniper',
      email: 'elitesniper@example.com',
      password_hash: await argon2.hash('password123'),
      avatar_url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
    },
    {
      user_id: uuidv4(),
      pseudonym: 'StrategyMaster',
      email: 'strategymaster@example.com',
      password_hash: await argon2.hash('password123'),
      avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      user_id: uuidv4(),
      pseudonym: 'SpeedRunner99',
      email: 'speedrunner@example.com',
      password_hash: await argon2.hash('password123'),
      avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      user_id: uuidv4(),
      pseudonym: 'NoobSlayer',
      email: 'noobslayer@example.com',
      password_hash: await argon2.hash('password123'),
      avatar_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    },
    {
      user_id: uuidv4(),
      pseudonym: 'TeamPlayer',
      email: 'teamplayer@example.com',
      password_hash: await argon2.hash('password123'),
      avatar_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face'
    },
    {
      user_id: uuidv4(),
      pseudonym: 'CyberAce',
      email: 'cyberace@example.com',
      password_hash: await argon2.hash('password123'),
      avatar_url: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop&crop=face'
    },
    {
      user_id: uuidv4(),
      pseudonym: 'RageQuit',
      email: 'ragequit@example.com',
      password_hash: await argon2.hash('password123'),
      avatar_url: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=400&fit=crop&crop=face'
    },
    {
      user_id: uuidv4(),
      pseudonym: 'HeadShotKing',
      email: 'headshotking@example.com',
      password_hash: await argon2.hash('password123'),
      avatar_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face'
    },
    {
      user_id: uuidv4(),
      pseudonym: 'LootHunter',
      email: 'loothunter@example.com',
      password_hash: await argon2.hash('password123'),
      avatar_url: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop&crop=face'
    }
  ];

  // Créer les jeux compétitifs
  const games = [
    {
      game_id: uuidv4(),
      title: "Counter-Strike 2",
      category: "FPS Tactique",
      description: "Jeu de tir tactique en équipe avec des rounds économiques et une précision chirurgicale requise.",
      release_date: new Date('2023-09-27'),
      image_url: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
      platform: "PC, Steam"
    },
    {
      game_id: uuidv4(),
      title: "Valorant",
      category: "FPS Héros",
      description: "Shooter tactique 5v5 avec des agents aux capacités uniques dans un univers futuriste.",
      release_date: new Date('2020-06-02'),
      image_url: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5bdafbbb2c6c9785/5eb26f5389857c3b5b2c2857/V_AGENTS_587x900_Sage.jpg",
      platform: "PC"
    },
    {
      game_id: uuidv4(),
      title: "League of Legends",
      category: "MOBA",
      description: "MOBA 5v5 stratégique avec plus de 160 champions et une scène esport mondiale.",
      release_date: new Date('2009-10-27'),
      image_url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",
      platform: "PC"
    },
    {
      game_id: uuidv4(),
      title: "Dota 2",
      category: "MOBA Complexe",
      description: "MOBA hardcore avec une profondeur stratégique inégalée et The International.",
      release_date: new Date('2013-07-09'),
      image_url: "https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg",
      platform: "PC, Steam"
    },
    {
      game_id: uuidv4(),
      title: "Overwatch 2",
      category: "FPS Héros",
      description: "Shooter d'équipe 5v5 avec des héros aux rôles distincts : Tank, Damage, Support.",
      release_date: new Date('2022-10-04'),
      image_url: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/fb5979e15ca5098b5355a1b3cb115c6105eb8b85be8b3e2ce8e61f96b7b82b96.jpg",
      platform: "PC, PlayStation, Xbox, Nintendo Switch"
    },
    {
      game_id: uuidv4(),
      title: "Rocket League",
      category: "Sport Arcade",
      description: "Football avec des voitures volantes. Simple à comprendre, impossible à maîtriser.",
      release_date: new Date('2015-07-07'),
      image_url: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Frocket-league%2Fhome%2FRL_Season5_Epic_Store_1200x1600-1200x1600-4ac9e0fafe0b0e7a6b99a7c37883a87f4c6f8e6c.jpg",
      platform: "PC, PlayStation, Xbox, Nintendo Switch"
    },
    {
      game_id: uuidv4(),
      title: "Apex Legends",
      category: "Battle Royale",
      description: "Battle Royale rapide avec des Légendes aux capacités tactiques uniques.",
      release_date: new Date('2019-02-04'),
      image_url: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg",
      platform: "PC, PlayStation, Xbox, Nintendo Switch"
    },
    {
      game_id: uuidv4(),
      title: "Fortnite",
      category: "Battle Royale Construction",
      description: "Battle Royale avec mécaniques de construction et événements crossover épiques.",
      release_date: new Date('2017-09-26'),
      image_url: "https://cdn2.unrealengine.com/26br-screenshot-meta-image-1920x1080-1920x1080-5bb02d92f37c.jpg",
      platform: "PC, PlayStation, Xbox, Nintendo Switch, Mobile"
    },
    {
      game_id: uuidv4(),
      title: "Call of Duty: Warzone",
      category: "Battle Royale Réaliste",
      description: "Battle Royale intense avec jusqu'à 150 joueurs et mécaniques du Goulag.",
      release_date: new Date('2020-03-10'),
      image_url: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/warzone/home/reveal/wz-meta-image.jpg",
      platform: "PC, PlayStation, Xbox"
    },
    {
      game_id: uuidv4(),
      title: "Rainbow Six Siege",
      category: "FPS Tactique Destruction",
      description: "FPS tactique 5v5 avec destruction environnementale et opérateurs spécialisés.",
      release_date: new Date('2015-12-01'),
      image_url: "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7kISGWbrkOw8CAHWHrz6tF/45db5ec2f6a5b03e9b5c7cae5c01e115/r6s-operator-ace.jpg",
      platform: "PC, PlayStation, Xbox"
    },
    {
      game_id: uuidv4(),
      title: "Street Fighter 6",
      category: "Jeu de Combat",
      description: "Jeu de combat 2D légendaire avec Drive System et World Tour mode.",
      release_date: new Date('2023-06-02'),
      image_url: "https://www.streetfighter.com/6/assets/images/common/hero/ryu_chun-li.jpg",
      platform: "PC, PlayStation, Xbox"
    },
    {
      game_id: uuidv4(),
      title: "Tekken 8",
      category: "Jeu de Combat 3D",
      description: "Combat 3D technique avec le Heat System et des graphismes Unreal Engine 5.",
      release_date: new Date('2024-01-26'),
      image_url: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/47bVZ3fFrmfDYaXlqXnKBj/f2d7e7f0db8dd2b9b5e7d8c1e1e8c1f1/tekken8-hero.jpg",
      platform: "PC, PlayStation, Xbox"
    },
    {
      game_id: uuidv4(),
      title: "FIFA 24",
      category: "Sport Simulation",
      description: "Simulation de football avec Ultimate Team et Career Mode améliorés.",
      release_date: new Date('2023-09-29'),
      image_url: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-24/common/featured-image-16x9.jpg",
      platform: "PC, PlayStation, Xbox, Nintendo Switch"
    },
    {
      game_id: uuidv4(),
      title: "StarCraft II",
      category: "RTS",
      description: "RTS emblématique avec trois races asymétriques et une scène esport légendaire.",
      release_date: new Date('2010-07-27'),
      image_url: "https://bnetcmsus-a.akamaihd.net/cms/gallery/sc2/SC2_LOTV_BlizzCon_02.jpg",
      platform: "PC"
    },
    {
      game_id: uuidv4(),
      title: "Super Smash Bros. Ultimate",
      category: "Jeu de Combat Plateforme",
      description: "Combat de plateforme avec plus de 80 combattants de l'univers Nintendo et au-delà.",
      release_date: new Date('2018-12-07'),
      image_url: "https://www.smashbros.com/assets_v2/img/fighter/mario/main.png",
      platform: "Nintendo Switch"
    },
    {
      game_id: uuidv4(),
      title: "Hearthstone",
      category: "Jeu de Cartes",
      description: "JCC stratégique dans l'univers Warcraft avec des mécaniques innovantes.",
      release_date: new Date('2014-03-11'),
      image_url: "https://bnetcmsus-a.akamaihd.net/cms/page_media/1T8VH8M1QKQK1510078275625.jpg",
      platform: "PC, Mobile"
    },
    {
      game_id: uuidv4(),
      title: "Chess.com",
      category: "Échecs En Ligne",
      description: "Plateforme d'échecs en ligne avec tournois, puzzles et cours pour tous niveaux.",
      release_date: new Date('2007-01-01'),
      image_url: "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png",
      platform: "Web, Mobile"
    },
    {
      game_id: uuidv4(),
      title: "Teamfight Tactics",
      category: "Auto-Battler",
      description: "Auto-battler stratégique avec synergies de champions et gestion économique.",
      release_date: new Date('2019-06-26'),
      image_url: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/48d5e2e5a1e0a5b8c2d2e8f5c1e8b5f8a1e8b5f8.jpg",
      platform: "PC, Mobile"
    },
    {
      game_id: uuidv4(),
      title: "Mortal Kombat 1",
      category: "Jeu de Combat Brutal",
      description: "Combat brutal emblématique avec Fatalities et un nouveau système Kameo.",
      release_date: new Date('2023-09-19'),
      image_url: "https://www.mortalkombat.com/images/mk1-meta-image.jpg",
      platform: "PC, PlayStation, Xbox, Nintendo Switch"
    },
    {
      game_id: uuidv4(),
      title: "Gran Turismo 7",
      category: "Simulation Course",
      description: "Simulateur de course réaliste avec plus de 400 voitures et circuits mythiques.",
      release_date: new Date('2022-03-04'),
      image_url: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2618/cDHU28tb8RFFFPKP3EImWGmJ.png",
      platform: "PlayStation"
    }
  ];

  // Insérer les utilisateurs
  for (const user of users) {
    await prisma.user.create({
      data: user
    });
  }
  console.log(`👥 ${users.length} utilisateurs créés`);

  // Insérer les jeux
  for (const game of games) {
    await prisma.game.create({
      data: game
    });
  }
  console.log(`🎮 ${games.length} jeux créés`);

  console.log('✅ Seeding terminé avec succès !');
  console.log(`📊 Total: ${users.length} utilisateurs, ${games.length} jeux`);
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors du seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });