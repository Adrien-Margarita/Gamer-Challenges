import { Routes, Route } from "react-router"
// Pages auth
import LoginPage from "@/pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage"
import HomePage from "./pages/Homepage"
import ResetPasswordPage from "./pages/auth/ResetPasswordPage"
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage"
import ProfilePage from "./pages/ProfilePage"
import PopularPlayersPage from "./pages/PopularPlayersPage"

export default function Router() {
  return (
    <Routes>
      {/* Auth routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />

      {/* Public routes */}
      <Route path="/" element={<HomePage />} />

      {/* Private routes */}
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/popular-players" element={<PopularPlayersPage />} />
    </Routes>
  )
}