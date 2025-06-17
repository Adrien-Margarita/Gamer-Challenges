import { IGame } from "@/@types/IGame";

export default function GameCard({ game }: { game: IGame }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg border-1 border-primary relative group transition-transform transition-filter duration-300 ease-in-out
        transform scale-100 hover:scale-110 hover:z-10">
      
      <img
        src={game.image_url}
        alt={game.title}
        className="w-full h-[180px] object-cover border border-primary
        transition-transform transition-filter duration-300 ease-in-out
        filter hover:grayscale hover:contrast-200"
        draggable="false"
        loading="lazy"
      />

      <div className="absolute bottom-4 left-2 px-4 py-2 rounded-xl backdrop-blur-sm transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <h3 className="text-lg font-semibold text-white">{game.title}</h3>
      </div>
      <div className="absolute top-4 right-4 text-white text-2xl font-bold">
        {[28, 12, 38, 52, 15, 3, 9, 44][Number(game.game_id)]}
      </div> 
    </div>
  );
}