import Footer from "@/components/Footer";
import { Navbar } from "@/components/homepage";
import { useAuth } from "@/hooks/useAuth";
import {
  useAccountToDelete,
  usePlayerChallenges,
  usePlayerParticipations,  
} from "@/hooks/usePlayer";
import { getEmbedUrl } from "@/utils/getEmbedUrl";
import { Link } from "react-router";
import Icon from "@mdi/react";
import { useState } from "react";
import { Dialog } from "@/components/ui";
import { useUpdateChallenge } from "@/hooks/useChallenge";
import { IChallengeEditData } from "@/@types/IChallenge";
import { mdiPencil, mdiThumbUp, mdiTrashCan } from "@mdi/js";
import { useDeleteChallenge } from "@/hooks/useChallenge";
import {
  useDeleteParticipation,
  useUpdateParticipation,
} from "@/hooks/useParticipation";
import { IParticipationEditData } from "@/@types/IParticipation";
import { toast } from "react-hot-toast";

function ProfilePage() {
  const { auth } = useAuth();
  const userId = auth?.user_id;
  const {
    data: challenges,
    isLoading,
    isError,
  } = usePlayerChallenges(userId || "");

  const {
    data: participations,
    isLoading: isParticipationsLoading,
    isError: isParticipationsError,
  } = usePlayerParticipations(userId || "");

  const totalVotes = participations?.reduce(
    (total, participation) => total + participation.participation_vote.length,
    0
  );

  const [showForm, setShowForm] = useState(false);
  const [showFormParticipation, setShowFormParticipation] = useState(false);
  const { mutate: mutateChallenge } = useUpdateChallenge(userId);
  const { mutate: mutateParticipation } = useUpdateParticipation(userId);
  const [form, setForm] = useState<IChallengeEditData>({
    game_id: "",
    challenge_id: "",
    title: "",
    description: "",
    rules: "",
    image_url: "",
  });
  const [formParticipation, setFormParticipation] = useState<
    IParticipationEditData & { mediaType: "image" | "video" }
  >({
    participation_id: "",
    video_url: "",
    image_url: "",
    description: "",
    challenge_id: "",
    mediaType: "image",
  });
  const { challenge_id, ...payload } = form;
  const { participation_id, ...payloadParticipation } = formParticipation;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeParticipation = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormParticipation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutateChallenge(
      {
        challenge_id,
        challenge: payload,
      },
      {
        onSuccess: () => {
          toast.success("Challenge mis à jour avec succès");
          setShowForm(false);
        },
        onError: (err) => {
          toast.error("Erreur lors de la mise à jour du challenge");
          console.error("Erreur de mise à jour du challenge", err);
        },
      }
    );
  };

  const handleSubmitParticipation = (e: React.FormEvent) => {
    e.preventDefault();

    mutateParticipation(
      {
        participation_id,
        participation: payloadParticipation,
      },
      {
        onSuccess: () => {
          toast.success("Participation mise à jour avec succès");
          setShowFormParticipation(false);
        },
        onError: (err) => {
          toast.error("Erreur lors de la mise à jour de la participation");
          setShowFormParticipation(false);
          console.error("Erreur de mise à jour de la participation", err);
        },
      }
    );
  };

  // Suppression du challenge avec confirmation
  const deleteChallenge = useDeleteChallenge();

  const handleDeleteChallenge = (challenge_id: string) => {
    if (
      window.confirm(
        "Es-tu sûr de vouloir supprimer ce challenge ? Cette action est irréversible."
      )
    ) {
      deleteChallenge.mutate({ challenge_id });
    }
  };

  // Suppression de la participation avec confirmation
  const deleteParticipation = useDeleteParticipation();

  const handleDeleteParticipation = (participation_id: string) => {
    if (
      window.confirm(
        "Es-tu sûr de vouloir supprimer cette participation ? Cette action est irréversible."
      )
    ) {
      deleteParticipation.mutate({ participation_id });
    }
  };

  // Suppression du compte utilisateur
const deleteUser = useAccountToDelete();

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
    <>
      {showForm && (
        <Dialog onClose={() => setShowForm(false)} closeOnOutsideClick={false}>
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
                      (e.target as HTMLImageElement).src =
                        "/images/image-placeholder.png";
                    }}
                  />
                </div>
              )}
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="btn-ghost cursor-pointer"
              >
                Annuler
              </button>
              <button type="submit" className="btn btn-primary ml-4">
                Modifier
              </button>
            </div>
          </form>
        </Dialog>
      )}

      {showFormParticipation && (
        <Dialog
          onClose={() => setShowFormParticipation(false)}
          closeOnOutsideClick={false}
        >
          <form onSubmit={handleSubmitParticipation}>
            <h2 className="mb-2 font-semibold">
              Modifier une participation à un challenge
            </h2>
            <hr />

            {/* Description */}
            <div className="mb-4">
              <label htmlFor="description">Description</label>
              <input
                className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 mt-1"
                id="description"
                name="description"
                value={formParticipation?.description || ""}
                onChange={handleChangeParticipation}
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
                    setFormParticipation((f) => ({
                      ...f,
                      mediaType: "image",
                      video_url: "",
                    }))
                  }
                  className={`px-4 py-2 rounded border ${
                    formParticipation.mediaType === "image"
                      ? "bg-primary text-white"
                      : "bg-gray-800"
                  }`}
                >
                  Image
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormParticipation((f) => ({
                      ...f,
                      mediaType: "video",
                      image_url: "",
                    }))
                  }
                  className={`px-4 py-2 rounded border ${
                    formParticipation.mediaType === "video"
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
                {formParticipation.mediaType === "image"
                  ? "URL de l'image"
                  : "URL de la vidéo"}
              </label>
              <input
                className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 mt-1"
                id="media_url"
                name={
                  formParticipation.mediaType === "image"
                    ? "image_url"
                    : "video_url"
                }
                value={
                  formParticipation.mediaType === "image"
                    ? formParticipation.image_url
                    : formParticipation.video_url
                }
                onChange={handleChange}
                required
              />

              {/* Aperçu */}
              {formParticipation.mediaType === "image" && form.image_url && (
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

              {formParticipation.mediaType === "video" &&
                formParticipation.video_url && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-400 mb-2">Aperçu :</p>
                    <iframe
                      src={getEmbedUrl(formParticipation.video_url) ?? ""}
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
                onClick={() => setShowFormParticipation(false)}
                className="btn-ghost cursor-pointer"
              >
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
        <main className="flex-1 p-4 bg-gradient-to-r from-[#12243E] to-[#314C6B]">
          {/* Profil */}
          <section>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold mr-4 ml-4">Mon Profil</h2>
              <button className="btn btn-primary text-xs">Modifier mon mot de passe</button>
            </div>
            <hr className="ml-4 mt-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-8">
              <img
                src={auth?.avatar_url || "/assets/images/logo-color-full.svg"}
                alt="avatar du profil"
                className="rounded-full border-4 border-primary shadow-lg max-w-[200px] max-h-[200px] mx-auto mt-6 mb-4 md:mb-0 md:mt-0 md:ml-6 md:mr-0 md:justify-center"
              />
              <div className="flex flex-col gap-3 w-full p-6">
                <p className="text-secondary text-3xl">
                  <strong>{auth?.pseudonym}</strong>
                </p>
                <p className="text-muted text-sm">{auth?.email}</p>
              </div>
            </div>
            <hr className="mt-8" />
            <div className="flex justify-center gap-8 text-white mb-4">
              <span className="text-secondary flex items-center gap-4"><Icon className="text-secondary" path={mdiThumbUp} size={1.4} /> {totalVotes}</span>
            </div>
            <hr className="mt-4" />
          </section>

          {/* Section mes participations */}
          <section className="m-4">
            <h2 className="text-xl md:text-2xl font-semibold text-secondary mb-4">
              Mes participations
            </h2>
            <hr />

            {isParticipationsLoading && (
              <p className="text-white">Chargement...</p>
            )}
            {isParticipationsError && (
              <p className="text-red-400">
                Erreur lors du chargement des participations.
              </p>
            )}

            {!isParticipationsLoading &&
              !isParticipationsError &&
              participations?.length === 0 && (
                <p className="text-white">
                  Aucune participation pour l’instant.
                </p>
              )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {participations?.map((participation) => (
                <>
                <div
                  key={participation.participation_id}
                >

                  {participation.video_url ? (
                    <iframe
                      src={getEmbedUrl(participation.video_url) ?? ""}
                      className="w-full object-cover min-h-[300px] rounded-lg border-1 border-primary mb-2 transition duration-300 ease-in-out filter hover:grayscale hover:contrast-100"
                      allowFullScreen
                      title="Vidéo de participation"
                    />
                  ) : (
                    <img
                      src={participation.image_url}
                      className="w-full min-h-[300px] object-cover rounded-lg border-1 border-primary mb-2 transition duration-300 ease-in-out filter hover:grayscale hover:contrast-100"
                    />
                  )}
                </div>
                <div>
                  <div className="flex flex-col">
                    <div className="flex w-full justify-between items-center">
                      <h4 className="text-xl w-full font-semibold text-white mb-1 mr-8">
                        {participation.challenge.title}
                      </h4>
                      <div className="flex gap-2 items-end justify-center bg-slate-800 shadow-lg p-2 rounded-lg">
                        <button
                          type="submit"
                          className="cursor-pointer tooltip tooltip-left"
                          data-tip="Supprimer la participation"
                          onClick={() =>
                            handleDeleteParticipation(
                              participation.participation_id
                            )
                          }
                        >
                          <Icon
                            path={mdiTrashCan}
                            size={1}
                            className="mr-2 text-red-400"
                          />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setFormParticipation({
                              participation_id: participation.participation_id,
                              video_url: participation.video_url,
                              image_url: participation.image_url,
                              description: participation.description,
                              challenge_id: participation.challenge_id,
                              mediaType: "image",
                            });
                            setShowFormParticipation(true);
                          }}
                          className="cursor-pointer tooltip tooltip-left"
                          data-tip="Modifier la participation"
                        >
                          <Icon
                            path={mdiPencil}
                            size={1}
                            className="mr-2"
                          />
                        </button>
                      </div>
                    </div>
                    <h3 className="text-muted text-sm m-0 mb-2 mt-2">
                      {participation.description}
                    </h3>
                    <hr className="mt-2" style={{marginBottom: "0.3rem", borderColor: "rgba(255, 255, 255, 0.2)" }} />
                    <p className="text-muted text-sm text-right mr-4 text-warning">
                      Jeu : {participation.challenge.game.title} • {" "}
                      {participation.participation_vote.length} votes
                    </p>
                    <hr className="mt-2 mb-8" style={{ borderColor: "rgba(255, 255, 255, 0.2)" }} />

                  </div>
                </div>
                </>
              ))}
            </div>
          </section>

          {/* Section mes challenges */}
          <section className="m-4 mt-12">
            <h2 className="text-xl lg:text-2xl font-semibold text-secondary mb-4">
              Mes challenges
            </h2>
            <hr className="mb-4" /> 

            {isLoading && <p className="text-white">Chargement...</p>}
            {isError && (
              <p className="text-red-400">
                Erreur lors du chargement des challenges.
              </p>
            )}

            {!isLoading && !isError && challenges?.length === 0 && (
              <p className="text-white">
                Aucun challenge modifié pour l’instant.
              </p>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {challenges?.map((challenge) => (
                <>
                  <div
                    key={challenge.challenge_id}
                  >
                    <Link to={`/challenges/${challenge.challenge_id}`}>
                      <img
                        src={challenge.image_url}
                        alt={challenge.title}
                        className="w-full h-full object-cover rounded-lg border-1 border-primary mb-2 transition duration-300 ease-in-out filter hover:grayscale hover:contrast-100"
                      />
                    </Link>
                  </div>

                  <div>
                    <div className="flex flex-col">
                      <div className="flex w-full justify-between items-center">
                        <h4 className="text-xl w-full font-semibold text-white">
                          {challenge.title}
                        </h4>
                        <div className="flex gap-2 items-end justify-center bg-slate-800 shadow-lg p-2 rounded-lg">
                          <button
                            onClick={() =>
                              handleDeleteChallenge(challenge.challenge_id)
                            }
                            disabled={deleteChallenge.isPending}
                            className="cursor-pointer tooltip tooltip-left"
                            data-tip="Supprimer le challenge"
                          >
                            <Icon
                              path={mdiTrashCan}
                              size={1}
                              className="mr-2 text-red-400">
                            </Icon>
                          </button>
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
                            data-tip="Modifier le challenge"
                            className="cursor-pointer tooltip tooltip-left"
                            >
                            <Icon
                              path={mdiPencil}
                              size={1}
                              className="mr-2">
                            </Icon>
                          </button>
                        </div>
                      </div>
                      {/* <hr className="mt-2" /> */}
                      <h3 className="text-muted text-sm mb-2 mt-4">
                        {challenge.description}
                      </h3>
                      <hr className="mt-2" style={{marginBottom: "0.3rem", borderColor: "rgba(255, 255, 255, 0.2)" }} />
                      <h3 className="text-muted text-sm text-right mr-4 text-warning">
                        Jeu : {challenge.game.title} •{" "}
                        {challenge.participation.length} participations
                      </h3>
                      <hr className="mt-2 mb-8" style={{ borderColor: "rgba(255, 255, 255, 0.2)" }} />
                    </div>
                  </div>
                </>
              ))}
              <hr className="mt-2" style={{marginBottom: "0.3rem", borderColor: "rgba(255, 255, 255, 0.2)" }} />
                <button 
                className="btn btn-primary text-xs bg-red-500 hover:bg-red-600"
                onClick={() => handleDeleteUser(userId || "")}>
                  Supprimer mon compte
                  </button>
              <hr className="mt-2 mb-8" style={{ borderColor: "rgba(255, 255, 255, 0.2)" }} />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default ProfilePage;
