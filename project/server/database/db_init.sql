DROP DATABASE IF EXISTS gamerchallenge;
CREATE DATABASE gamerchallenge

-- EXTENSION TO GENERATE UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- USER
DROP TABLE IF EXISTS "user";
CREATE TABLE IF NOT EXISTS "user" (
  user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), -- Identifiant unique de l’utilisateur
	pseudonym TEXT NOT NULL UNIQUE, -- pseudonyme
	email TEXT NOT NULL UNIQUE, -- email
	password_hash TEXT NOT NULL, -- Mot de passe
	avatar_url TEXT, -- URL de l'avatar
	created_at TIMESTAMP DEFAULT NOW(), -- Date de création
	updated_at TIMESTAMP DEFAULT NOW() -- Date de modification
);

-- GAME
DROP TABLE IF EXISTS "game";
CREATE TABLE IF NOT EXISTS "game" (
	game_id UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(), -- identifiant unique du jeu
	title TEXT NOT NULL UNIQUE, -- Titre
	category TEXT NOT NULL UNIQUE, -- categorie
	description TEXT NOT NULL, -- Description
  release_date TIMESTAMP NOT NULL, -- Date de sortie
	image_url TEXT, -- Image (jaquette ou fanart)
  platform TEXT NOT NULL, -- Plateforme : xbox, pc, ps5...
	created_at TIMESTAMP DEFAULT NOW(), -- Date de création
	updated_at TIMESTAMP DEFAULT NOW() -- Date de modification
);

-- CHALLENGE
DROP TABLE IF EXISTS "challenge";
CREATE TABLE IF NOT EXISTS "challenge" (
  challenge_id UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(), -- identifiant unique du challenge
  title TEXT NOT NULL UNIQUE, -- Titre
  description TEXT NOT NULL, -- Description
  rules TEXT NOT NULL, -- Règles du challenge
  user_id UUID NOT NULL, -- Clé étrangère vers user_id
  game_id UUID NOT NULL, -- Clé étrangère vers game_id
  created_at TIMESTAMP DEFAULT NOW(), -- Date de création
	updated_at TIMESTAMP DEFAULT NOW() -- Date de modification
);

-- PARTICIPATION
DROP TABLE IF EXISTS "participation";
CREATE TABLE IF NOT EXISTS "participation" (
  participation_id UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL, -- Clé étrangère vers user_id
  video_url TEXT, -- URL de la vidéo partagée
  image_url TEXT, -- URL de l'image partagée
  description TEXT NOT NULL, -- Description
  challenge_id UUID NOT NULL,  -- Clé étrangère vers challenge_id
  created_at TIMESTAMP DEFAULT NOW(), -- Date de création
	updated_at TIMESTAMP DEFAULT NOW() -- Date de modification
);

-- CHALLENGE_VOTE
CREATE TABLE IF NOT EXISTS "challenge_vote"
(
    challenge_vote_id uuid NOT NULL,
    user_id uuid NOT NULL,
    challenge_id uuid NOT NULL,
    CONSTRAINT challenge_vote_pkey PRIMARY KEY (challenge_vote_id),
    CONSTRAINT challenge_vote_challenge_id_fkey FOREIGN KEY (challenge_id)
        REFERENCES public.challenge (challenge_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE RESTRICT,
    CONSTRAINT challenge_vote_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES public."user" (user_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE RESTRICT
)

-- PARTICIPATION_VOTE
CREATE TABLE IF NOT EXISTS "participation_vote"
(
    participation_vote_id uuid NOT NULL,
    user_id uuid NOT NULL,
    participation_id uuid NOT NULL,
    CONSTRAINT participation_vote_pkey PRIMARY KEY (participation_vote_id),
    CONSTRAINT participation_vote_participation_id_fkey FOREIGN KEY (participation_id)
        REFERENCES public.participation (participation_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE RESTRICT,
    CONSTRAINT participation_vote_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES public."user" (user_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE RESTRICT
)
