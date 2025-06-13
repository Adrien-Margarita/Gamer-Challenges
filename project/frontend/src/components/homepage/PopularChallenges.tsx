

function PopularChallenges() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Les challenges les plus populaires</h2>
      <hr />
      <div className="grid grid-cols-1 gap-6 w-full">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="grid grid-cols-2 gap-6 w-full" key={index}>
            <div className="w-full card bg-base-200 shadow-lg p-4 h-50">
            </div>
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-2">LOREM IPSUM</h3>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet faucibus justo.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PopularChallenges