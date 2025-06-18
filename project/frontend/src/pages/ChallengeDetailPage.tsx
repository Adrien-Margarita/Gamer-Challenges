import Footer from "@/components/Footer";
import { Navbar } from "@/components/homepage";
import { Dialog, Skeleton } from "@/components/ui";
import {
  useChallenge,
  useParticipationsByChallengeId,
} from "@/hooks/useChallenge";
import { useMemo, useState } from "react";
import { useParams } from "react-router";
import { getEmbedUrl } from "@/utils/getEbedUrl";
import { useCreateParticipation } from "@/hooks/useParticipation";
import { IParticipationFormData } from "@/@types/IParticipation";
import { VoteButtonParticipation } from "@/components/ui/VoteButtonParticipation";
import { VoteButtonChallenge } from "@/components/ui/VoteButtonChallenge";
import SearchBar from "@/components/SearchBar";
import Icon from '@mdi/react';
import { mdiAccountCircleOutline } from '@mdi/js';
// import { useAtom } from "jotai";
// import { authAtom } from "@/stores/authAtom";


export default function ChallengeDetailPage() {
  const [visibleCount, setVisibleCount] = useState(2);
  const { mutate: CreateParticipation } = useCreateParticipation();
  const { id } = useParams<{ id: string }>();
  const { data: challenge, isLoading } = useChallenge(id ?? "");
  const { data } = useParticipationsByChallengeId(id ?? "");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<
    IParticipationFormData & { mediaType: "image" | "video" }
  >({
    video_url: "",
    image_url: "",
    description: "",
    challenge_id: id ?? "",
    mediaType: "image",
  });
  const [search, setSearch] = useState("");

  const participations = useMemo(() => {
    return Array.isArray(data) ? data : [];
  }, [data]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev: typeof form) => ({ ...prev, [name]: value }));
  };

  const filteredParticipations = useMemo(
    () => 
      participations.filter((participation) => 
        participation.user.pseudonym.toLowerCase().includes(search.toLowerCase())
    ), [participations, search]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    CreateParticipation(form, {
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
        <p className="text-white text-sm">Chargement du challenge...</p>
      </div>
    );
  }
  if (!challenge) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#12243E] to-[#314C6B]">
        <p className="text-red-400 text-sm">Challenge introuvable.</p>
      </div>
    );
  }
  return (
    <>
      {showForm && (
        <Dialog onClose={() => setShowForm(false)} closeOnOutsideClick>
          <form onSubmit={handleSubmit}>
            <h2 className="mb-2 font-semibold">
              Créer une participation à un challenge
            </h2>
            <hr />

            {/* Description */}
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

            {/* Type de média */}
            <div className="mb-4">
              <label className="block mb-2">Type de média</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setForm((f) => ({
                      ...f,
                      mediaType: "image",
                      video_url: "",
                    }))
                  }
                  className={`px-4 py-2 rounded border ${
                    form.mediaType === "image"
                      ? "bg-primary text-white"
                      : "bg-gray-800"
                  }`}
                >
                  Image
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setForm((f) => ({
                      ...f,
                      mediaType: "video",
                      image_url: "",
                    }))
                  }
                  className={`px-4 py-2 rounded border ${
                    form.mediaType === "video"
                      ? "bg-primary text-white"
                      : "bg-gray-800"
                  }`}
                >
                  Vidéo
                </button>
              </div>
            </div>

            {/* URL selon le type */}
            <div className="mb-4">
              <label htmlFor="media_url" className="block mb-2">
                {form.mediaType === "image"
                  ? "URL de l'image"
                  : "URL de la vidéo"}
              </label>
              <input
                className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 mt-1"
                id="media_url"
                name={form.mediaType === "image" ? "image_url" : "video_url"}
                value={
                  form.mediaType === "image" ? form.image_url : form.video_url
                }
                onChange={handleChange}
                required
              />

              {/* Aperçu */}
              {form.mediaType === "image" && form.image_url && (
                <div className="mt-4">
                  <p className="text-sm text-gray-400 mb-2">Aperçu :</p>
                  <img
                    src={form.image_url}
                    alt="Aperçu"
                    className="w-full max-h-[200px] object-cover rounded border border-gray-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/images/image-placeholder.png";
                    }}
                  />
                </div>
              )}

              {form.mediaType === "video" && form.video_url && (
                <div className="mt-4">
                  <p className="text-sm text-gray-400 mb-2">Aperçu :</p>
                  <iframe
                    src={getEmbedUrl(form.video_url) ?? ""}
                    className="w-full h-[200px] rounded border border-gray-700"
                    allowFullScreen
                  />
                </div>
              )}
            </div>

            {/* Boutons */}
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="btn-ghost cursor-pointer"
              >
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

            {!isLoading && challenge && (
              <>
                <div className="flex w-full justify-between mb-4">
                  <h2 className="text-4xl text-semibold mb-10">
                    {challenge.game.title}
                  </h2>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setForm({
                        description: "",
                        image_url: "",
                        video_url: "",
                        mediaType: "image",
                        challenge_id: id!,
                        // user_id: "",
                      });
                      setShowForm(true);
                    }}
                  >
                    Créer une participation
                  </button>
                </div>
                {/* Image et description du challenge */}
                <div className="relative w-full max-w-7xl mx-auto mb-12">
                  <img
                    src={challenge.image_url}
                    alt={challenge.title}
                    className="w-full h-[500px] object-cover rounded-xl shadow-xl"
                  />
                  <div className="absolute bottom-4 left-6 px-4 py-2 rounded-xl backdrop-blur-sm bg-base-200 ">
                    <h2 className="text-2xl font-semibold text-white">
                      {challenge.title}
                    </h2>
                    <p className="text-sm text-gray-300">
                      {challenge.description}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Règles</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {challenge.rules}
                  </p>
                </div>

                {/* Bouton de vote pour un challenge et icon de nombre de participations */}
                <div className="flex gap-2 justify-between">
                  <div className="flex gap-1 text-primary">
                    <p className="font-bold">{participations.length}</p>
                    <Icon path={mdiAccountCircleOutline} size={1} />
                  </div>
                  <div className="text-primary">
                    <VoteButtonChallenge challengeId={challenge.challenge_id}/>
                  </div>
                </div>
                <div>
                  
                  <SearchBar  value= {search} onChange={setSearch} placeholder="Rechercher une participation ..." />
                  <h2 className="text-2xl font-bold mb-4">
                    Toutes les participations
                  </h2>
                </div>

                {/* Affichage des participations */}
                <div className="flex flex-col gap-4">
                  {isLoading
                    ? Array.from({ length: 4 }).map((_, index) => (
                        <Skeleton key={index} className="h-32 w-full" />
                                      ))
                                    : filteredParticipations
                                        ?.slice(0, visibleCount)
                                        .map((participation) => (
                                          <section className="flex gap-4 bg-base-200 shadow p-4">
                                            <div className="relative w-full max-w-7xl mx-auto">

                                              {/* Avatar et pseudonyme du joueur */}
                                              <div className="flex items-center gap-4 mb-4">
                                                <img
                                                src={participation.user.avatar_url || "/assets/images/logo-color-full.svg"}
                                                alt={`${participation.user.pseudonym} avatar`}
                                                className="w-10 h-10 rounded-full object-cover border border-gray-500"
                                              />
                                              <h3 className="text-lg font-semibold text-white">
                                                {participation.user.pseudonym}
                                              </h3>
                                              </div>

                                              {/* Affichage de la vidéo ou de l'image */}
                                              {participation.video_url ? (
                                                <iframe
                                                  src={
                                                    getEmbedUrl(participation.video_url) ?? ""
                                                  }
                                                  className="w-full h-[500px] rounded-xl shadow-xl"
                                                  allowFullScreen
                                                  title="Vidéo de participation"
                                                />
                                              ) : (
                                                <img
                                                  src={participation.image_url}
                                                  className="w-full h-[500px] object-cover rounded-xl shadow-xl"
                                                />
                                              )}
                                            </div>
                                            <div className="w-full">
                                              <p>{participation.description}</p>
                                              <VoteButtonParticipation participationId={participation.participation_id} />
                                            </div>
                                          </section>
                                        ))}

                                  {participations && visibleCount < participations.length && (
                                    <div className="flex justify-center">
                                      <button
                                        onClick={() => setVisibleCount((prev) => prev + 4)}
                                        className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/80 transition"
                                      >
                                        Voir plus
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </>
                            )}
                          </section>
                        </main>
                        <Footer />
                      </div>
                    </>
  );
}
