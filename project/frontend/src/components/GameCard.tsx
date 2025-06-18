import { IGame } from "@/@types/IGame";

export default function GameCard({ game }: { game: IGame }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg border-1 border-primary relative group transition-transform transition-filter duration-300 ease-in-out">
      
      <img
        src={game.image_url}
        alt={game.title}
        className="w-full h-[180px] object-cover border border-primary
        transition-transform transition-filter duration-300 ease-in-out
        filter hover:grayscale hover:contrast-100 transform scale-100 hover:scale-110"
        draggable="false"
        loading="lazy"
      />

      <div className="absolute bottom-0 left-0 w-full px-4 py-2 transition-opacity duration-300 bg-[#12243E] opacity-0 group-hover:opacity-100">
        <h3 className="text-lg font-semibold text-white">{game.title}</h3>
      </div>
    </div>
  );
}