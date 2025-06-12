import { Routes, Route } from "react-router"
// Pages auth
import LoginPage from "@/pages/auth/LoginPage"
import Register from "./pages/auth/Register"

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}