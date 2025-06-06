# MLD

- Utilisateur (CodeUtilisateur, Pseudonyme, Email, MotDePasse, Avatar)
- Jeu (CodeJeu, Titre, Catégorie, Description, DateSortie, Plateforme, Image)
- Defi (CodeDefi, Titre, Description, Règle, #CodeJeu, #CodeUtilisateur)
- Participation (CodeParticipation, LienVideo, LienCaptureEcran, Description, #CodeDefi, #CodeUtilisateur)

- UTILISATEURVOTEPARTICIPATION (CodeVoteParticipation, #CodeParticipation, #CodeUtilisateur)
- UTILISATEURVOTEDEFI (#CodeVoteDefi, #CodeDefi, #CodeUtilisateur)
- PARTICIPER (#CodeUtilisateur, #CodeParticipation)