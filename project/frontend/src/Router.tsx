import { Routes, Route } from "react-router";
// Pages auth
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import HomePage from "./pages/Homepage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ProfilePage from "./pages/ProfilePage";
import PopularPlayersPage from "./pages/PopularPlayersPage";
import RequireAuth from "./components/RequireAuth";
import GamesPage from "./pages/GamesPage";
import GameDetailPage from "./pages/GameDetailPage";
import ChallengesPage from "./pages/ChallengesPage";
import ChallengeDetailPage from "./pages/ChallengeDetailPage";

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
      <Route path="/games" element={<GamesPage />} />
      <Route path="/game/:id" element={<GameDetailPage />} />
      <Route path="/challenges" element={<ChallengesPage />} />

      {/* Private routes */}
      <Route element={<RequireAuth />}>
        <Route path="/games/:id" element={<GameDetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/popular-players" element={<PopularPlayersPage />} />
        <Route path="/challenges/:id" element={<ChallengeDetailPage />} />
      </Route>
    </Routes>
  );
}
