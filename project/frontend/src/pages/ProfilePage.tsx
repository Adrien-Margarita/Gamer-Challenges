import { Navbar } from "@/components/homepage"
import { useAuth } from "@/hooks/useAuth"

function ProfilePage() {
  const { auth } = useAuth()

  return (
    <div className="min-h-screen bg-base-200 text-white">
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Mon Profil</h1>
        <p>Bienvenue, <strong>{auth?.pseudonym}</strong> !</p>
        <p>Email : {auth?.email}</p>
      </main>
    </div>
  )
}

export default ProfilePage