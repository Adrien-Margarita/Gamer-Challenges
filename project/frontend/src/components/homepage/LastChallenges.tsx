import { useLastChallenges } from "@/hooks/useChallenge";


function LastChallenges() {
    const { data: challenges } = useLastChallenges();
  
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Les challenges les plus populaires</h2>
      <hr />
      <div className="grid grid-cols-1 gap-6 w-full">
        {challenges?.slice(0, 3).map((challenge, index) => (
          <div className="grid grid-cols-2 gap-6 w-full" key={index}>
            <div className="w-full card shadow-lg h-82">
              <p className="mb-4">{challenge.game.title}</p>
              <img
                src={challenge.game.image_url}
                alt={challenge.game.title}
                className="h-full object-cover rounded-lg border-1 border-primary"
              />
            </div>
            <div className="w-full">
              <br /> <br />
              <h3 className="md:text-2xl lg:text-3xl font-semibold mb-2">{challenge.title}</h3>
              <p className="text-lg text-muted-foreground mb-4">
                {challenge.description}
              </p>
              <p className="text-md text-muted-foreground">
                {challenge.rules}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LastChallenges