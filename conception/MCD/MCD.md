## Code Mocodo

JEU: code_jeu, titre, categorie, description, date_de_sortie, plateforme, image
CREER, 0N UTILISATEUR, 01 DEFI
UTILISATEUR: code_utilisateur, pseudonyme, email, mot_de_passe, avatar
:

APPARTENIR, 11 DEFI, 0N JEU
UTILISATEUR_VOTE_DEFI, 0N UTILISATEUR, 0N DEFI: code_vote_defi,
PARTICIPER, 0N UTILISATEUR, 1N PARTICIPATION
UTILISATEUR_VOTE_PARTICIPATION, 0N PARTICIPATION, 0N UTILISATEUR : code_vote_participation,

DEFI: code_defi, titre, description, regles
COMPOSER, 0N DEFI, 11 PARTICIPATION
PARTICIPATION: code_participation, lien_video, lien_capture_ecran, description
: