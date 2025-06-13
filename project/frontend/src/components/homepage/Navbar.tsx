import { Button } from "../ui"

function Navbar() {
  return (
    <header className="navbar bg-base-100 shadow">
      <div className="flex-1 text-xl font-bold">Gamer Challenge</div>
      <div className="flex gap-2">
        <input className="ghost" placeholder="Rechercher" />
        <Button className="ghost">Se connecter</Button>
        <Button className="default">S’inscrire</Button>
      </div>
    </header>
  )
}

export default Navbar