import { IGame } from "@/@types/IGame";
import { useAuth } from "@/hooks/useAuth";
import { useDeleteGame } from "@/hooks/useGame";
import { mdiCogOutline, mdiMicrosoftWindows, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";

export default function GameCard({
  game,
  onEdit,
}: {
  game: IGame;
  onEdit?: (game: IGame) => void;
}) {
  const { isAdmin } = useAuth();
  const deleteGame = useDeleteGame();

  const handleDeleteGame = (game_id: string) => {
    if (window.confirm("Es-tu sûr de vouloir supprimer ce jeu ? Cette action est irréversible.")) {
      deleteGame.mutate({ game_id });
    }
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-lg border-1 border-primary relative">
      <img
        src={game.image_url}
        alt={game.title}
        className="w-full h-[300px] object-cover border border-primary
        transition-transform transition-filter duration-300 ease-in-out
        filter hover:grayscale hover:contrast-100"
        draggable="false"
        loading="lazy"
      />

      {isAdmin && (
        <div className="absolute top-4 right-2 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onEdit?.(game); // Appelle la fonction parent
            }}
            className="p-1 rounded hover:text-yellow-400 bg-black/40 text-white"
          >
            <Icon path={mdiCogOutline} size={1} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              handleDeleteGame(game.game_id);
            }}
            disabled={deleteGame.isPending}
            className="p-1 rounded hover:text-red-400 disabled:opacity-50 bg-black/40 text-white"
          >
            <Icon path={mdiTrashCanOutline} size={1} />
          </button>
        </div>
      )}

      <div className="flex align-center justify-between absolute bottom-0 left-0 w-full px-4 py-2 bg-[#12243E]">
        <h3 className="text-lg font-semibold text-white">{game.title}</h3>
        <Icon path={mdiMicrosoftWindows} size={1} />
      </div>
    </div>
  );
}
