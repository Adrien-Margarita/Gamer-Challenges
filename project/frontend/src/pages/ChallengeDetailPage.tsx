import Footer from "@/components/Footer";
import { Navbar } from "@/components/homepage";
import { useChallenge } from "@/hooks/useChallenge";
import { useParams } from "react-router";

export default function ChallengeDetailPage() {
    const { id } = useParams<{ id: string }>();
    const { data: challenge, isLoading } = useChallenge(id ?? "");
    console.log(challenge)

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