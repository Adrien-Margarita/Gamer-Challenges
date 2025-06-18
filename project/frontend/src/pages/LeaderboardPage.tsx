import { Navbar, PopularPlayers } from "@/components/homepage"
import LeaderboardTable from "@/components/leaderboard/LeaderboardTable";
import { useBestPlayers } from "@/hooks/usePlayer";

function LeaderboardPage() {
  const { data: players = [] } = useBestPlayers();
  const rest = players?.slice(3);
  
  return (
    <>
      <Navbar />
      <PopularPlayers/>
      <div className="separator"></div>
      <LeaderboardTable players={rest} offset={3}/>
    </>
  )
}

export default LeaderboardPage