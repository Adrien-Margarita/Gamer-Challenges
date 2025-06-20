import type { IUserData } from "@/@types/IPlayer";
import { useUserToDelete } from "@/hooks/usePlayer";
import { mdiPencil, mdiTrashCan } from "@mdi/js";
import Icon from "@mdi/react";
import toast from "react-hot-toast";

type Props = {
  player: IUserData;
};


export default function LeaderboardRow({ player }: Props) {

  // Suppression du compte utilisateur
  const deleteUser = useUserToDelete();

  const handleDeleteUser = (user_id: string) => {
    if (
      window.confirm(
        "Es-tu sûr de vouloir supprimer ton compte ? Cette action est irréversible."
      )
    ) {
      deleteUser.mutate({ id: user_id }, {
        onSuccess: () => {
          toast.success("Compte supprimé avec succès");
          // Rediriger l'utilisateur, par exemple :
          window.location.href = "/";
        },
        onError: (err) => {
          toast.error("Erreur lors de la suppression du compte");
          console.error("Erreur de suppression du compte", err);
        },
      });
    }
  };

  return (
    <tr className="border-b border-gray-700 hover:bg-base-300 transition">
      <td className="px-4 py-3 flex items-center gap-2">
        <img
          src={player.avatar_url || "/images/default-avatar.png"}
          alt={player.pseudonym}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold">{player.pseudonym}</div>
          <div className="text-sm text-gray-400">
            @{player.pseudonym.toLowerCase()}
          </div>
        </div>
      </td>
      <td className="px-4 py-3">{player.email}</td>
      <td className="px-4 py-3">{player.role.role_name}</td>
      <td className="py-3 text-center">
        <button
          type="submit"
          onClick={() => handleDeleteUser(player.user_id)}
          className="cursor-pointer tooltip tooltip-left"
          data-tip="Supprimer la participation"
        >
          <Icon path={mdiTrashCan} size={1} className="mr-2 text-red-400" />
        </button>
        <button
          type="button"
          onClick={() => {}}
          className="cursor-pointer tooltip tooltip-left"
          data-tip="Modifier la participation"
        >
          <Icon path={mdiPencil} size={1} />
        </button>
      </td>
    </tr>
  );
}
