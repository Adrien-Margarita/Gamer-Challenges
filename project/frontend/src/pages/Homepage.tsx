import Footer from "@/components/Footer";
import { Navbar, PopularChallenges, PopularPlayers, PopularGames, LastChallenges } from "@/components/homepage";
import LastGames from "@/components/homepage/LastGames";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className="flex-1 p-4 space-y-12 bg-gradient-to-r from-[#12243E]  to-[#314C6B]">
        {/* Joueurs populaires */}
        <PopularPlayers />

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