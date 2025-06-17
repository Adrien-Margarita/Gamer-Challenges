import Footer from "@/components/Footer";
import { Navbar } from "@/components/homepage";
import { Skeleton } from "@/components/ui";
import { useChallenge, useParticipationsByChallengeId } from "@/hooks/useChallenge";
import { useState } from "react";
import { useParams } from "react-router";
import { getEmbedUrl } from "@/utils/getEbedUrl";

export default function ChallengeDetailPage() {
    const [visibleCount, setVisibleCount] = useState(2);
    const { id } = useParams<{ id: string }>();
    const { data: challenge, isLoading } = useChallenge(id ?? "");
    const { data: participations } = useParticipationsByChallengeId(id ?? "")
    
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
      <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#12243E] to-[#314C6B]">
          {/* Navbar */}
          <Navbar />
          <main className="flex-1 p-4 space-y-12">
              <section>
                  {isLoading && <p className="text-center">Chargement...</p>}

                  {!isLoading && challenge && (
                  <>
                  {/* Image et description du challenge */}
                      <div className="relative w-full max-w-7xl mx-auto mb-12">
                        <img
                        src={challenge.image_url}
                        alt={challenge.title}
                        className="w-full h-[500px] object-cover rounded-xl shadow-xl"
                        />
                        <div className="absolute bottom-4 left-6 px-4 py-2 rounded-xl backdrop-blur-sm bg-base-200 ">
                          <h2 className="text-2xl font-semibold text-white">{challenge.title}</h2>
                          <p className="text-sm text-gray-300">{challenge.description}</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Règles</h3>
                        <p className="text-lg text-muted-foreground mb-4">{challenge.rules}</p>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold mb-4">Toutes les participations</h2>
                      </div>



                     {/* Affichage des participations */} 
                      <div className="flex flex-col gap-4"> 
                          {isLoading
                            ? Array.from({ length: 4 }).map((_, index) => (
                                <Skeleton key={index} className="h-32 w-full" />
                              ))
                            : participations?.slice(0, visibleCount).map((participation) => (
                              <section className="flex gap-4 bg-base-200 shadow p-4">
                                  <div className="relative w-full max-w-7xl mx-auto">
                                    {/* TODO: ajout du player + condition de l'image/vidéo et user_id */}
                                    {/* <h3 className="text-lg font-semibold mb-2">{participation.user.pseudonym}</h3> */}
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
                                  </div>
                                  <div className="w-full">
                                    <p>{participation.description}</p>
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
                    <div className="w-full max-w-7xl mx-auto mb-12">
                      <img
                      src={challenge.image_url}
                      alt={challenge.title}
                      className="w-full h-[180px] object-cover border border-primary
                      transition-transform transition-filter duration-300 ease-in-out
                      filter hover:grayscale hover:contrast-100 transform scale-100 hover:scale-110"
                      draggable="false"
                      loading="lazy"
                      />
                      <div className="absolute bottom-4 left-6 px-4 py-2 rounded-xl backdrop-blur-sm bg-base-200 ">
                        <h2 className="text-2xl font-semibold text-white">{challenge.title}</h2>
                        <p className="text-sm text-gray-300">{challenge.description}</p>
                      </div>
                    </div>
                  </>
                  )}
  
              </section>
            </main>
          <Footer />
      </div>
    );
}