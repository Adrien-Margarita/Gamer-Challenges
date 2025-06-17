import apiClient from "@/lib/axios"
import { csrfTokenAtom } from "@/stores/csrfAtom"
import { getDefaultStore } from "jotai"

const store = getDefaultStore()

/**
 * Vérifie si un token CSRF est déjà présent.
 * Sinon, le récupère via l'API et le stocke dans le store Jotai.
 */
export async function ensureCsrfToken(): Promise<void> {
  const existing = store.get(csrfTokenAtom)
  if (existing) return

  const res = await apiClient.get("/csrf-token")
  store.set(csrfTokenAtom, res.data.csrfToken)
}
