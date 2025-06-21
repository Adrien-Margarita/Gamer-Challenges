import LeaderboardRow from "./UserboardRow";
import type { IUserData } from "@/@types/IPlayer";

type Props = {
  players: IUserData[];
  offset?: number;
};

export default function LeaderboardTable({ players, offset = 0 }: Props) {
  return (
    <div className="p-4 space-y-6">
      {/* Table classique visible uniquement en sm+ */}
      <div className="hidden w-full sm:block overflow-x-auto rounded-xl shadow-lg bg-base-200">
        <table className="w-full text-left table-auto">
          <thead className="bg-base-300 text-muted">
            <tr>
              <th className="px-4 py-3">Pseudonyme</th>
              <th className="px-4 py-3">E-mail</th>
              <th className="px-4 py-3">Rôle</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <LeaderboardRow key={player.user_id} player={player} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Version mobile en cartes */}
      <div className="sm:hidden space-y-4">
        {players.map((player, i) => (
          <div
            key={player.user_id}
            className="bg-base-200 p-4 rounded-lg shadow-lg space-y-2"
          >
            <div className="text-primary font-semibold text-lg">
              #{i + 1 + offset} - {player.pseudonym}
            </div>
            <div className="text-primary font-semibold text-lg">
              #{i + 1 + offset} - {player.email}
            </div>
            <div>
              <img
                src={player.avatar_url || "/images/default-avatar.png"}
                alt={player.pseudonym}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <div className="text-primary font-semibold text-lg">
              #{i + 1 + offset} - {player.role.role_name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
