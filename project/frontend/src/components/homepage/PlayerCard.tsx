import type { IMostVotedPlayer } from "@/@types/IPlayer";

export default function PlayerCard({
  user,
  index
}: IMostVotedPlayer) {
  return (
    <div key={user.user_id} className="card bg-base-200 w-[250px] shadow-lg p-8 flex items-center justify-between">
      <img className="mb-4 rounded-full border-4 border-primary shadow-lg" src={user.avatar_url} alt={user.pseudonym} />
      <div className="flex items-center justify-center gap-8">
        <h2 className="badge badge-primary rounded-full h-8 w-8 font-semibold">{index+1}</h2>
        <h1 className="text-2xl font-light">{user.pseudonym}</h1>
      </div>
    </div>
  );
}
