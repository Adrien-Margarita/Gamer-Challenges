import { Navbar } from "@/components/homepage"
import { useAuth } from "@/hooks/useAuth"

function ProfilePage() {
  const { auth } = useAuth()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-4 space-y-12 bg-gradient-to-r from-[#12243E]  to-[#314C6B]">
        {/* Profil Content */}
        <h1 className="text-2xl font-bold mb-4">Mon Profil</h1>
        <p>Bienvenue, <strong>{auth?.pseudonym}</strong> !</p>
        <p>Email : {auth?.email}</p>
      </main>
    </div>
  )
}

export default ProfilePage