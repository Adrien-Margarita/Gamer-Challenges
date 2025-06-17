import { useMostPopularChallenges } from "@/hooks/useChallenge";
import { mdiArrowRightCircleOutline } from "@mdi/js";
import { Icon } from "@mdi/react";


function PopularChallenges() {
    const { data: challenges } = useMostPopularChallenges();
  
  return (
    <section>
      <div className="flex items-center justify-between text-primary">
        <h2 className="text-2xl font-bold mb-4">Les challenges les plus populaires</h2>
        <Icon path={mdiArrowRightCircleOutline} size={1.4} />
      </div>
      <hr />
      <div className="grid grid-cols-1 gap-6 w-full">
        {challenges?.slice(0, 3).map((challenge, index) => (
          <div className="grid grid-cols-2 gap-6 w-full" key={index}>
            <div className="w-full card shadow-lg h-82 mb-6">
              <h3 className="relative mb-2 mt-4 font-semibold">{challenge.game.title}</h3>
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
              <p className="md:text-sm text-md text-muted-foreground">
                {challenge.rules}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PopularChallenges