import { IGame } from "@/@types/IGame";
import { mdiMicrosoftWindows } from "@mdi/js";
import Icon from "@mdi/react";

export default function GameCard({ game }: { game: IGame }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg border-1 border-primary relative">
      <img
        src={game.image_url}
        alt={game.title}
        className="w-full h-[300px] object-cover border border-primary
        transition-transform transition-filter duration-300 ease-in-out
        filter hover:grayscale hover:contrast-100 transform scale-100 hover:scale-110"
        draggable="false"
        loading="lazy"
      />

      <div className="flex align-center justify-between absolute bottom-0 left-0 w-full px-4 py-2 bg-[#12243E]">
        <h3 className="text-lg font-semibold text-white">{game.title}</h3>
        <Icon path={mdiMicrosoftWindows} size={1} />
      </div>
    </div>
  );
}