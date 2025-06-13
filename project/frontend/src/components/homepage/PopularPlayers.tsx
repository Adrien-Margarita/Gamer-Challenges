import { Button } from '../ui'

function PopularPlayers() {
  return (
    <section>
      <div className="flex flex-col items-center m-10">
        <h2 className="text-6xl mb-4 text-white text-center">Voici les <b>joueurs</b> les plus <b>populaires</b> de la semaine</h2>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="card bg-base-200 shadow p-4 h-50">
          <h3 className="gamer-name">1</h3>
          <h3 className="gamer-name font-semibold">John Doe</h3>
        </div>
        <div className="card bg-base-200 shadow p-4 h-50">
          <h3 className="gamer-name">2</h3>
          <h3 className="gamer-name font-semibold">Jane Doe</h3>
        </div>
        <div className="card bg-base-200 shadow p-4 h-50">
          <h3 className="gamer-name">3</h3>
          <h3 className="gamer-name font-semibold">John Doe</h3>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Button className="btn btn-primary center mt-10">Voir tous les joueurs</Button>
      </div>
    </section>
  )
}

export default PopularPlayers