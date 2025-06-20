import type { IChallengeFormData } from "@/@types/IChallenge";
import { useAtom } from "jotai";
import { authAtom } from "@/stores/authAtom";
import { Navbar } from "@/components/homepage";
import { Dialog, Skeleton } from "@/components/ui";
import { useChallengesByGameId } from "@/hooks/useGame";
import { useCreateChallenge } from "@/hooks/useChallenge";
import { useGame } from "@/hooks/useGame";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";
import { VoteButtonChallenge } from "@/components/ui/VoteButtonChallenge";

export default function GameDetailPage() {
    const [auth] = useAtom(authAtom);
    const { id } = useParams<{ id: string }>();
    const { mutate: CreateChallenge } = useCreateChallenge();
    const [visibleCount, setVisibleCount] = useState(8);
    const [showForm,setShowForm] = useState(false)    
    const [form, setForm] = useState<IChallengeFormData>({
    title: "",
    description: "",
    rules: "",
    image_url: "",
    game_id: id ?? "",
    user_id: auth?.user_id ?? "",
  });
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    if (id || auth?.user_id) {
      setForm((prev) => ({
        ...prev,
        game_id: id ?? prev.game_id,
        user_id: auth?.user_id ?? prev.user_id,
      }));
    }
  }, [id, auth]);
  
  const navigate = useNavigate();

  const { data: game, isLoading, isError } = useGame(id ?? "");
  const { data } = useChallengesByGameId(id ?? "");

  const challenges = useMemo(() => {
    return Array.isArray(data) ? data : [];
  }, [data]);

  const filteredChallenges = useMemo(
    () => 
      challenges.filter((challenge) => 
        challenge.title.toLowerCase().includes(search.toLowerCase())
    ), [challenges, search]
  );

  useEffect(() => {
    if (isError && !isLoading) {
      navigate("/games");
    }
  }, [isError, isLoading, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev: IChallengeFormData) => ({ ...prev, [name]: value }))
  }

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  CreateChallenge(form, {
    onSuccess: () => {
      setShowForm(false);
    },
    onError: (err) => {
      console.error("Erreur création challenge", err);
    },
  });
};

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#12243E] to-[#314C6B]">
        <p className="text-white text-sm">Chargement du jeu...</p>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#12243E] to-[#314C6B]">
        <p className="text-red-400 text-sm">Jeu introuvable.</p>
      </div>
    );
  }

  if (!challenges) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#12243E] to-[#314C6B]">
        <p className="text-red-400 text-sm">Aucun challenge trouvé.</p>
      </div>
    );
  }

  return (
    <>
    {showForm && (
      <Dialog onClose={() => setShowForm(false)} closeOnOutsideClick>
        <form onSubmit={handleSubmit}>
          <h2 className="mb-2 font-semibold">Ajouter un challenge</h2>
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
            <label htmlFor="description">Description</label>
            <input
              className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 mt-1"
              id="description"
              name="description"
              value={form?.description || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rules">Règles</label>
            <textarea
              className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 mt-1"
              id="rules"
              name="rules"
              value={form?.rules || ""}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image_url">Image de couverture (url)</label>
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

      <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#12243E] to-[#314C6B]">
        {/* Navbar */}
        <Navbar />
        <main className="flex-1 p-4 space-y-12">
          <section>
            {isLoading && <p className="text-center">Chargement...</p>}

            {!isLoading && game && (
              <>
                {/* Image et description du jeu */}
                <div className="flex w-full justify-between items-center mb-4">
                  <div className="py-2">
                    <h2 className="text-xl lg:text-3xl font-semibold">{game.title}</h2>
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setForm({ 
                        title: "", 
                        description: "", 
                        rules: "", 
                        image_url: "", 
                        game_id: id!,
                        user_id: ""                      
                      })
                      setShowForm(true)
                    }}
                  >
                    Ajouter un challenge
                  </button>
                </div>
                <hr />
                <p className="text-gray-300 mb-8">{game.description}</p>
                <div className="w-full mx-auto mb-12">
                  <img
                    src={game.image_url}
                    alt={game.title}
                    className="w-full h-[580px] object-cover rounded-xl shadow-lg border-1 border-primary"
                  />
                </div>
              </>
            )}

            {!isLoading && !game && !isError && (
              <p className="text-center text-red-500">Jeu introuvable</p>
            )}
          </section>
          <section>
            <div className="flex flex-col md:flex-row w-full justify-between lg:items-center mb-4">
              <h2 className="text-xl lg:text-2xl font-semibold">Tous les challenges</h2>
              <SearchBar value= {search} onChange={setSearch} placeholder="Rechercher un challenge ..." />
            </div>
            <hr />
            {isLoading && challenges && !isError
              ? Array.from({ length: 8 }).map((_, index) => (
                <Skeleton key={index} className="h-32 w-full" />
              ))
              : filteredChallenges?.slice(0, visibleCount).map((challenge, index) => (
                  <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 w-full my-6" key={index}>
                      <div className="relative">
                        <Link to={`/challenges/${challenge.challenge_id}`}>
                        <img
                          src={challenge.image_url}
                          alt={challenge.title}
                          className="w-full h-[350px] rounded-lg object-cover border-1 border-primary
                          transition-transform transition-filter duration-300 ease-in-out
                          filter hover:grayscale hover:contrast-100"
                        />
                        </Link>

                        {/* Boutton en dehors du Link */}
                        <div className="absolute bottom-4 right-4 bg-black/40 p-3 rounded-full flex gap-1">
                           <VoteButtonChallenge challengeId={challenge.challenge_id} />
                        </div>
                      </div>

                      {/* Bloc titre + description */}
                      <div className="w-full">
                        <Link to={`/challenges/${challenge.challenge_id}`} className="w-full">
                          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">{challenge.title}</h2>
                          <hr className="mt-2" style={{marginBottom: "0.3rem", borderColor: "rgba(255, 255, 255, 0.2)" }} />
                          <p className="text-lg text-muted-foreground mb-2">
                            {challenge.description}
                          </p>
                          <hr style={{marginBottom: "1rem", borderColor: "rgba(255, 255, 255, 0.2)" }} />
                          <p className="text-md text-muted-foreground">
                            {challenge.rules}
                          </p>
                        </Link>
                      </div>
                  </div>
              ))}
              {challenges.length >= 4 && (
                <div className="flex justify-center">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 8)}
                    className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/80 transition"
                  >
                    Voir plus
                  </button>
                </div>
              )}
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
