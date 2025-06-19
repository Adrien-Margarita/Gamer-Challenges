import Footer from "@/components/Footer"
import { Navbar } from "@/components/homepage"
import { useAuth } from "@/hooks/useAuth"
import { usePlayerChallenges, usePlayerParticipations } from "@/hooks/usePlayer"
import { getEmbedUrl } from "@/utils/getEbedUrl"
import { Link } from "react-router"
import Icon from '@mdi/react';
import { useState } from "react"
import { Dialog } from "@/components/ui"
import { useUpdateChallenge } from "@/hooks/useChallenge"
import { IChallengeEditData } from "@/@types/IChallenge"
import { mdiThumbUp, mdiTrashCanOutline } from '@mdi/js';
import { useDeleteChallenge } from "@/hooks/useChallenge"
import { useDeleteParticipation } from "@/hooks/useParticipation"

function ProfilePage() {
  const { auth } = useAuth()
  const userId = auth?.user_id
  const { data: challenges, isLoading, isError } = usePlayerChallenges(userId || "")
  const { data: participations, isLoading: isParticipationsLoading, isError: isParticipationsError } = usePlayerParticipations(userId ?? "")
  const totalVotes = participations?.reduce((total, participation) => total + participation.participation_vote.length, 0);

  const [showForm, setShowForm] = useState(false);
  const { mutate } = useUpdateChallenge(userId);
  const [form, setForm] = useState<IChallengeEditData>({
    game_id: "",
    challenge_id: "",
    title: "",
    description: "",
    rules: "",
    image_url: "",
  });
  const { challenge_id, ...payload } = form;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(
      {
        challenge_id, challenge: payload
      }, {
      onSuccess: () => {
        setShowForm(false);
      },
      onError: (err) => {
        console.error("Erreur mise à jour challenge", err);
      },
    });
  };

  // Suppression du challenge avec confirmation
  const deleteChallenge = useDeleteChallenge();

  const handleDeleteChallenge = (challenge_id: string) => {
    if (window.confirm("Es-tu sûr de vouloir supprimer ce challenge ? Cette action est irréversible.")) {
      deleteChallenge.mutate({ challenge_id });
    }
};

// Suppression de la participation avec confirmation
  const deleteParticipation = useDeleteParticipation();

  const handleDeleteParticipation = (participation_id: string) => {
    if (window.confirm("Es-tu sûr de vouloir supprimer cette participation ? Cette action est irréversible.")) {
      deleteParticipation.mutate({ participation_id });
    }
};

  return (
    <>
      {showForm && (
        <Dialog onClose={() => setShowForm(false)} closeOnOutsideClick>
          <form onSubmit={handleSubmit}>
            <h2 className="mb-2 font-semibold">Modifier un challenge</h2>
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
                Modifier
              </button>
            </div>
          </form>
        </Dialog>
      )}

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 p-4 space-y-12 bg-gradient-to-r from-[#12243E]  to-[#314C6B]">

          {/* Profil */}
          <h2 className="text-2xl font-bold m-4">Mon Profil</h2>
          <section className="flex gap-3 m-4">
            <div className="w-[50%] border-1 flex flex-col gap-1">
              <img src={auth?.avatar_url || "/assets/images/logo-color-full.svg"} alt="avatar du profil" className="p-4 rounded-[20%]" />
              <div className="flex justify-center gap-2 text-white mb-4">
                <Icon path={mdiThumbUp} size={1} />
                <p>{totalVotes}</p>
              </div>
              <div className="flex flex-col gap-3 w-full border-1 p-6">
                <p>Pseudo <strong>{auth?.pseudonym}</strong></p>
                <p>Email {auth?.email}</p>
              </div>
            </div>
        </section>

        {/* Section mes challenges */}
        <section className="m-4">
          <h3 className="text-2xl font-bold text-white mb-4">Mes challenges</h3>

          {isLoading && <p className="text-white">Chargement...</p>}
          {isError && <p className="text-red-400">Erreur lors du chargement des challenges.</p>}

          {!isLoading && !isError && challenges?.length === 0 && (
            <p className="text-white">Aucun challenge créé pour l’instant.</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {challenges?.map((challenge) => (
              <div key={challenge.challenge_id} className="bg-white/10 p-4 rounded-lg shadow-md">
                 <Link to={`/challenges/${challenge.challenge_id}`}>
                <h4 className="text-lg font-semibold text-white mb-1">{challenge.title}</h4>
                <p className="text-white/80 text-sm mb-2">{challenge.description}</p>
                <img
                  src={challenge.image_url}
                  alt={challenge.title}
                  className="w-full h-32 object-cover rounded mb-2"
                />
                </Link>
                <p className="text-white/60 text-sm">
                  Jeu : {challenge.game.title} • {challenge.participation.length} participations
                </p>
                <button onClick={() => handleDeleteChallenge(challenge.challenge_id)}>
                  <Icon path={mdiTrashCanOutline} size={1} />
                </button>
              </div>
              
            ))}
          </div>
        </section>

        {/* Section mes participations */}
        <section className="m-4">
          <h3 className="text-2xl font-bold text-white mb-4">Mes participations</h3>

          {isParticipationsLoading && <p className="text-white">Chargement...</p>}
          {isParticipationsError && <p className="text-red-400">Erreur lors du chargement des participations.</p>}

          {!isParticipationsLoading && !isParticipationsError && participations?.length === 0 && (
            <p className="text-white">Aucune participation pour l’instant.</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {participations?.map((participation) => (
              <>
              <div key={participation.participation_id} className="bg-white/10 p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-white mb-1">{participation.challenge.title}</h4>
                <p className="text-white/80 text-sm mb-2">{participation.description}</p>
                {participation.video_url ? (
                 <iframe
                  src={getEmbedUrl(participation.video_url) ?? ""}
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
                <p className="text-white/60 text-sm">
                  Jeu : {participation.challenge.game.title} • {participation.participation_vote.length} votes
                </p>
                <button onClick={() => handleDeleteParticipation(participation.participation_id)}>
                  <Icon path={mdiTrashCanOutline} size={1} />
                </button>
              </div>
            <div className="flex flex-col gap-3 w-full border-1 p-6">
              <p>Pseudo <strong>{auth?.pseudonym}</strong></p>
              <p>Email {auth?.email}</p>
            </div>
            </>
            ))}
          </div>  
          </section>

          {/* Section mes challenges */}
          <section className="m-4">
            <h3 className="text-2xl font-bold text-white mb-4">Mes challenges</h3>

            {isLoading && <p className="text-white">Chargement...</p>}
            {isError && <p className="text-red-400">Erreur lors du chargement des challenges.</p>}

            {!isLoading && !isError && challenges?.length === 0 && (
              <p className="text-white">Aucun challenge créé pour l’instant.</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {challenges?.map((challenge) => (
                <>
                  <Link to={`/challenges/${challenge.challenge_id}`}>
                    <div key={challenge.challenge_id} className="bg-white/10 p-4 rounded-lg shadow-md">
                      <h4 className="text-lg font-semibold text-white mb-1">{challenge.title}</h4>
                      <p className="text-white/80 text-sm mb-2">{challenge.description}</p>
                      <img
                        src={challenge.image_url}
                        alt={challenge.title}
                        className="w-full h-32 object-cover rounded mb-2"
                      />
                      <p className="text-white/60 text-sm">
                        Jeu : {challenge.game.title} • {challenge.participation.length} participations
                      </p>
                    </div>
                  </Link>
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        setForm({
                          game_id: challenge.game_id,
                          challenge_id: challenge.challenge_id,
                          title: challenge.title,
                          description: challenge.description,
                          rules: challenge.rules,
                          image_url: challenge.image_url,
                        });
                        setShowForm(true);
                      }}
                      className="btn btn-primary cursor-pointer">
                      Modifier
                    </button>
                    <button type="submit" className="btn btn-error ml-4">
                      Supprimer
                    </button>
                  </div>
                </>
              ))}
            </div>
          </section>

          {/* Section mes participations */}
          <section className="m-4">
            <h3 className="text-2xl font-bold text-white mb-4">Mes participations</h3>

            {isParticipationsLoading && <p className="text-white">Chargement...</p>}
            {isParticipationsError && <p className="text-red-400">Erreur lors du chargement des participations.</p>}

            {!isParticipationsLoading && !isParticipationsError && participations?.length === 0 && (
              <p className="text-white">Aucune participation pour l’instant.</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {participations?.map((participation) => (
                <div key={participation.participation_id} className="bg-white/10 p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-white mb-1">{participation.challenge.title}</h4>
                  <p className="text-white/80 text-sm mb-2">{participation.description}</p>
                  {participation.video_url ? (
                    <iframe
                      src={getEmbedUrl(participation.video_url) ?? ""}
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
                  <p className="text-white/60 text-sm">
                    Jeu : {participation.challenge.game.title} • {participation.participation_vote.length} votes
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default ProfilePage