import { useAuth } from "@/hooks/useAuth"
import { Navigate, Outlet } from "react-router"

export default function RequireAuth() {
  const { auth, isLoading } = useAuth()

  if (isLoading) return <div className="text-white">Chargement...</div>
  if (!auth) return <Navigate to="/login" replace />

  return <Outlet />
}
