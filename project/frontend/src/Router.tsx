import { Routes, Route } from "react-router"
// Pages auth
import LoginPage from "@/pages/auth/LoginPage"
import Register from "./pages/auth/Register"
import HomePage from "./pages/Homepage"
import ResetPassword from "./pages/auth/ResetPassword"
import ForgotPassword from "./pages/auth/ForgotPassword"

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  )
}