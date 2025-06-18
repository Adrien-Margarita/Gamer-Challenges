import { IGame, IGameFormData } from "@/@types/IGame";
import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";
import { Navbar } from "@/components/homepage";
import SearchBar from "@/components/SearchBar";
import { Dialog, Skeleton } from "@/components/ui";
import { useAuth } from "@/hooks/useAuth";
import { useCreateGame, useGames, useMostPopularGames } from "@/hooks/useGame";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";

export default function GamesPage() {
  const [visibleCount, setVisibleCount] = useState(8);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [search, setSearch] = useState("");
  const { data, isLoading } = useGames();
  const { isAdmin } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<IGameFormData>({
    title: "",
    category: "",
    description: "",
    release_date: new Date(),
    image_url:"",
    platform:"",
  }); 
  const { mutate: CreateGame } = useCreateGame();

  const games = useMemo(() => {
    return Array.isArray(data) ? data : [];
  }, [data]);

  const showMoreButton = games.length > 8 && visibleCount < games.length;
  const { data: popularGamesData } = useMostPopularGames();

  // Vérification que popularGamesData est un tableau
  // et utilisation de useMemo pour éviter les recalculs inutiles
  const popularGames: IGame[] = useMemo(
    () => (Array.isArray(popularGamesData) ? popularGamesData?.slice(0, 4) : []),
    [popularGamesData]
  );

  const filteredGames = useMemo(
    () => 
      games.filter((game) => 
        game.title.toLowerCase().includes(search.toLowerCase())
    ), [games, search]
  );
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: name === "release_date" ? new Date(value) : value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    CreateGame(form, {
      onSuccess: () => {
        setShowForm(false);
      },
      onError: (err) => {
        console.error("Erreur création challenge", err);
      },
    });
  };

  // Timer auto slide
  useEffect(() => {
    if (popularGames.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % popularGames.length);
    }, 5000); // 5 secondes

    return () => clearInterval(timer);
  }, [popularGames]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#12243E] to-[#314C6B]">
        <p className="text-white text-sm">Chargement du jeu...</p>
      </div>
    );
  }

  return (
    <>
    {showForm && (
      <Dialog onClose={() => setShowForm(false)} closeOnOutsideClick>
        <form onSubmit={handleSubmit}>
          <h2 className="mb-2 font-semibold">Ajouter un jeu</h2>
          <hr />
          <div className="mb-4">
            <label htmlFor="title">Titre</label>
            <input
              className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 mt-1"
              id="title"
              name="title"
              value={form?.title || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category">Catégorie</label>
            <input
              className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 mt-1"
              id="category"
              name="category"
              value={form?.category || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description">Description</label>
            <textarea
              className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 mt-1"
              id="description"
              name="description"
              value={form?.description || ""}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="relase_date">Date de sortie</label>
            <input
              type="date"
              className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 mt-1"
              id="release_date"
              name="release_date"
              value={form.release_date.toISOString().split("T")[0]}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="platform">Plateforme</label>
            <input
              className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 mt-1"
              id="platform"
              name="platform"
              value={form.platform}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image_url">Image du jeu (url)</label>
            <input
              className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 mt-1"
              id="image_url"
              name="image_url"
              value={form?.image_url || ""}
              onChange={handleChange}
            />

            {form.image_url && (
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-2">Aperçu :</p>
                <img
                  src={form.image_url}
                  alt="Aperçu"
                  className="w-full max-h-[200px] object-cover rounded border border-gray-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/image-placeholder.png";
                  }}
                />
              </div>
            )}
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={() => setShowForm(false)} className="btn-ghost cursor-pointer">
              Annuler
            </button>
            <button type="submit" className="btn btn-primary ml-4">
              Créer
            </button>
          </div>
        </form>
      </Dialog>
    )}


    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 p-4 bg-gradient-to-r from-[#12243E] to-[#314C6B]">
        <div>
          <h2 className="text-2xl font-bold mb-4">Les jeux les plus populaires</h2>
          {isAdmin && (
            <div className="flex flex-col items-center">
              <button
                    className="btn btn-primary"
                    onClick={() => {
                      setForm({
                        title: "",
                        category: "",
                        description: "",
                        image_url: "",
                        release_date: new Date(),
                        platform: "",
                      });
                      setShowForm(true);
                    }}
                  >
                    Ajouter un jeu
                  </button>
            </div>
          )}
        </div>        
        <hr />
        <p className="text-lg text-muted-foreground mb-4">
          Découvrez les jeux les plus populaires de la plateforme.
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          Cliquez sur un jeu pour voir les détails et les challenges associés.
        </p>
        {/* Section des jeux populaires */}
        {/* Carousel */}
        {popularGames.length > 0  && (
          <div className="relative w-full mx-auto mb-8 rounded-xl overflow-hidden shadow-xl border border-primary">
            <Link to={`/games/${popularGames[currentSlide].game_id}`}>
              <img
                src={popularGames[currentSlide].image_url}
                alt={popularGames[currentSlide].title}
                className="w-full h-[500px] object-cover transition duration-300 ease-in-out filter hover:grayscale hover:contrast-100 transform scale-100 hover:scale-110"
              />
            </Link>

            {/* Overlay titre */}
            <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl backdrop-blur-sm bg-base-200/80">
              <h3 className="text-2xl font-semibold">
                {popularGames[currentSlide].title}
              </h3>
            </div>

            {/* Points de navigation */}
            <div className="absolute items-center top-10 left-[41%] lg:left-[48%] flex gap-2">
              {popularGames.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? "bg-secondary" : "bg-base-100 opacity-50"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
        
        
        {/* Section des jeux */}
        <div className="flex mt-8 mb-4 justify-center">
          <h2 className="text-2xl font-bold w-full mt-4">Tous les jeux</h2>
          <SearchBar  value={search} onChange={setSearch} placeholder="Rechercher un jeu ..." />
        </div>
        <hr />
        <p className="text-lg text-muted-foreground mb-8 mt-8">
          Explorez tous les jeux disponibles sur la plateforme.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <Skeleton key={index} className="h-32 w-full" />
              ))
            : filteredGames.slice(0, visibleCount).map((game) => (
                <Link to={`/game/${game.game_id}`} key={game.game_id}>
                  <GameCard game={game} />
                </Link>
              ))}
        </div>

        {showMoreButton && (
          <div className="flex justify-center mt-6 mb-6">
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/80 transition"
            >
              Voir plus
            </button>
          </div>
        )}
      </main>
      

      {/* Footer */}
      <Footer />
    </div>
    </>
  );
}
