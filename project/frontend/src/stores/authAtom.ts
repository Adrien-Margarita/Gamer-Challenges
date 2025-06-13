import { IAuthUser } from "@/@types/IAuth"
import { atom } from "jotai"


/**
 * Atom global contenant l'utilisateur connecté.
 * Ne contient jamais le mot de passe.
 */
export const authAtom = atom<IAuthUser | null>(null)
export const authLoadingAtom = atom<boolean>(true)


// Voir pour extraire le password