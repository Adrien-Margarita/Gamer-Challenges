function PopularGames() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Les jeux les plus populaires</h2>
      <hr />
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="card bg-base-200 shadow p-4 h-64 flex items-center justify-center">
            <h3 className="text-lg font-semibold">Jeu {index + 1}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PopularGames