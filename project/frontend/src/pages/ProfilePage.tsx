import Footer from "@/components/Footer"
import { Navbar } from "@/components/homepage"
import { useAuth } from "@/hooks/useAuth"
import { usePlayerChallenges, usePlayerParticipations } from "@/hooks/usePlayer"
import { getEmbedUrl } from "@/utils/getEbedUrl"
import { Link } from "react-router"
import Icon from '@mdi/react';
import { mdiThumbUp } from '@mdi/js';

function ProfilePage() {
  const { auth } = useAuth()
  const userId = auth?.user_id

  const { data: challenges, isLoading, isError } = usePlayerChallenges(userId || "")

  const { data: participations, isLoading: isParticipationsLoading, isError: isParticipationsError } = usePlayerParticipations(userId ?? "")

  const totalVotes = participations?.reduce((total, participation) => total + participation.participation_vote.length, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-4 space-y-12 bg-gradient-to-r from-[#12243E]  to-[#314C6B]">

        {/* Profil */}
        <h2 className="text-2xl font-bold m-4">Mon Profil</h2>
        <section className="flex gap-3 m-4">
          <div className="w-[50%] border-1 flex flex-col gap-1">
            <img src={auth?.avatar_url} alt="avatar du profil" className="p-4 rounded-[20%]"/>
            <div className="flex justify-center gap-2 text-white mb-4">
              <Icon path={mdiThumbUp} size={1} />
              <p>{totalVotes}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full border-1 p-6">
          <p>Pseudo <strong>{auth?.pseudonym}</strong></p>
          <p>Email {auth?.email}</p>
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
  )
}

export default ProfilePage