import { atom } from "jotai"
import { IUser } from "@/@types/IUser"

/**
 * Atom global contenant l'utilisateur connecté.
 * Ne contient jamais le mot de passe.
 */
export const authAtom = atom<IUser | null>(null)


// Voir pour extraire le password