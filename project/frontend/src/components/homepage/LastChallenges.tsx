function LastChallenges() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Les derniers challenges</h2>
      <hr />
      <div className="grid grid-cols-1 gap-6 w-full">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="card bg-base-200 shadow p-4 h-50">
            <h3 className="text-lg font-semibold mb-2">LOREM IPSUM</h3>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet faucibus justo.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LastChallenges