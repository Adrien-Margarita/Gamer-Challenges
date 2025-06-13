import { ReactNode, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { logger } from "@/utils/logger";

type AuthProviderProps = {
  children: ReactNode
}

/**
 * Initialise la session utilisateur à l'échelle de l'application.
 */

export default function AuthProvider({ children }: AuthProviderProps) {
  const { initAuth } = useAuth()

  useEffect(() => {
    logger("🔁 AuthProvider: initAuth lancé")
    initAuth()
  }, [initAuth])

  return <>{children}</>
}