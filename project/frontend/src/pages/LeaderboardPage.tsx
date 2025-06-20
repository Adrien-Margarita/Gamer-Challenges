import { Navbar, PopularPlayers } from "@/components/homepage"
import LeaderboardTable from "@/components/leaderboard/LeaderboardTable";
import { useBestPlayers } from "@/hooks/usePlayer";

function LeaderboardPage() {
  const { data: players = [] } = useBestPlayers();
  const rest = players?.slice(3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-4 space-y-12 bg-gradient-to-r from-[#12243E]  to-[#314C6B]">
        <PopularPlayers/>
        <div className="separator"></div>
        <LeaderboardTable players={rest} offset={3}/>
      </main>
    </div>
  )
}

export default LeaderboardPage