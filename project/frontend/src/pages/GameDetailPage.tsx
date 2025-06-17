import { Navbar } from "@/components/homepage";
import { Skeleton } from "@/components/ui";
import { useChallengesByGameId } from "@/hooks/useGame";
import { useGame } from "@/hooks/useGame";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

export default function GameDetailPage() {
  const [visibleCount, setVisibleCount] = useState(8);
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

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: game, isLoading, isError } = useGame(id ?? "");
  const { data: challenges } = useChallengesByGameId(id ?? "");

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
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#12243E] to-[#314C6B]">
      {/* Navbar */}
      <Navbar />
      <main className="flex-1 p-4 space-y-12">
        <section>
          {isLoading && <p className="text-center">Chargement...</p>}
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

          {!isLoading && game && (
            <>
              {/* Image et description du jeu */}
              <div className="relative w-full max-w-7xl mx-auto mb-12">
                <img
                  src={game.image_url}
                  alt={game.title}
                  className="w-full h-[500px] object-cover rounded-xl shadow-xl"
                />
                <div className="absolute bottom-4 left-6 px-4 py-2 rounded-xl backdrop-blur-sm bg-base-200 ">
                  <h2 className="text-2xl font-semibold">{game.title}</h2>
                  <p className="text-sm text-gray-300">{game.description}</p>
                </div>
              </div>
            </>
          )}
                <div className="relative w-full mx-auto mb-12">
                  <img
                    src={game.image_url}
                    alt={game.title}
                    className="w-full h-[580px] object-cover rounded-xl shadow-xl"
                  />
                  <div className="absolute bottom-4 left-6 px-4 py-2 rounded-xl backdrop-blur-sm bg-base-200 ">
                    <h2 className="text-2xl font-semibold">{game.title}</h2>
                    <p className="text-sm text-gray-300">{game.description}</p>
                  </div>
                </div>
              </>
            )}

          {!isLoading && !game && !isError && (
            <p className="text-center text-red-500">Jeu introuvable</p>
          )}
        </section>
        <section>
          {isLoading && challenges && !isError
            ? Array.from({ length: 8 }).map((_, index) => (
                <Skeleton key={index} className="h-32 w-full" />
              ))
            : challenges?.slice(0, visibleCount).map((challenge) => (
                <Link
                  to={`/challenges/${challenge.challenge_id}`}
                  key={challenge.challenge_id}
                >
                  <div
                    key={challenge.challenge_id}
                    className="card bg-base-200 shadow p-4 flex flex-col justify-between"
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      {challenge.title}
                    </h3>
                    <img
                      src={challenge.image_url}
                      alt={challenge.title}
                      className="w-full h-[180px] object-cover rounded-lg border-1 border-primary mt-auto"
                    />
                    <div className="text-right text-2xl font-bold">
                      {/* TODO: Affichage des nombres de challenge par jeux*/}
                      {
                        [28, 12, 38, 52, 15, 3, 9, 44][
                          Number(challenge.challenge_id)
                        ]
                      }
                    </div>
                  </div>
                </Link>
              ))}
          <div className="flex justify-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/80 transition"
            >
              Voir plus
            </button>
          </div>
        </section>
      </main>
    </div>
              : challenges?.slice(0, visibleCount).map((challenge, index) => (
                <Link to={`/challenges/${challenge.challenge_id}`}>
                  <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 w-full" key={index}>
                      <div>
                        <img
                          src={challenge.image_url}
                          alt={challenge.title}
                          className="w-full h-full rounded-lg object-cover border border-primary
                          transition-transform transition-filter duration-300 ease-in-out
                          filter hover:grayscale hover:contrast-100"
                        />
                      </div>
                      <div className="w-full">
                        <h2 className="md:text-2xl lg:text-3xl font-semibold mb-2">{challenge.title}</h2>
                        <hr />
                        <p className="text-lg text-muted-foreground mb-4">
                          <p className="font-semibold">Description:</p>
                          {challenge.description}
                        </p>
                        <p className="text-md text-muted-foreground">
                        <p className="font-semibold">Règles:</p>

                          {challenge.rules}
                        </p>
                      </div>
                  </div>
                </Link>
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
      </div>
    </>
  );
}
