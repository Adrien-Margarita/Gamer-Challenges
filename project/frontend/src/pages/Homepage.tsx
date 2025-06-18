import Footer from "@/components/Footer";
import { Navbar, PopularChallenges, PopularPlayers, PopularGames, LastChallenges } from "@/components/homepage";
import LastGames from "@/components/homepage/LastGames";
import { useAuth } from "@/hooks/useAuth";
import {   useNavigate } from "react-router";



const HomePage = () => {
  
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();  


  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className="flex-1 p-4 space-y-12 bg-gradient-to-r from-[#12243E]  to-[#314C6B]">
        {/* Joueurs populaires */}
        <section>
          <PopularPlayers />
          {isAuthenticated && (
            <div className="flex flex-col items-center">
              <button
                className="btn btn-primary center mt-10"
                onClick={() => navigate("/leaderboard")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    navigate(`/leaderboard`);
                  }
                }}
              >
                Voir le leaderboard
              </button>
            </div>
          )}
        </section>

        {/* Challenges populaires */}
        <PopularChallenges />

        {/* Jeux populaires */}
        <PopularGames />

        {/* Derniers challenges */}
        <LastChallenges />

        {/* Derniers jeux */}
        <LastGames />

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;