## Code Mocodo

APPARTENIR, 11 DEFI, 0N JEU
DEFI: code_defi, titre, description, regles
COMPOSER, 0N DEFI, 11 PARTICIPATION
PARTICIPATION: code_participation, lien_video, lien_capture_ecran, description
CONTENIR, 0N PARTICIPATION, 11 UTILISATEUR_VOTE_PARTICIPATION

JEU: code_jeu, titre, categorie, description, date_de_sortie, plateforme, image
EVALUER, 0N DEFI, 11 UTILISATEUR_VOTE_DEFI
CREER, 0N UTILISATEUR, 01 DEFI
PARTICIPER, 0N UTILISATEUR, 1N PARTICIPATION
UTILISATEUR_VOTE_PARTICIPATION: code_vote_participation,

:
UTILISATEUR_VOTE_DEFI: code_vote_defi,
VOTER, 0N UTILISATEUR, 11 UTILISATEUR_VOTE_DEFI
UTILISATEUR: code_utilisateur, pseudonyme, email, mot_de_passe, avatar
REALISER, 0N UTILISATEUR, 11 UTILISATEUR_VOTE_PARTICIPATION