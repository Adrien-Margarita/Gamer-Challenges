import { useMostPopularChallenges } from "@/hooks/useChallenge";
import { mdiArrowRightCircleOutline } from "@mdi/js";
import { Icon } from "@mdi/react";
import { Link } from "react-router";


function PopularChallenges() {
    const { data: challenges } = useMostPopularChallenges();

  return (
    <section>
      <div className="flex items-center justify-between text-secondary">
        <h2 className="text-3xl font-semibold mb-4">Les challenges les plus populaires</h2>
        <Link to="/challenges">
          <Icon className="mb-4" path={mdiArrowRightCircleOutline} size={1.4} />
        </Link>
      </div>
      <hr />
      <div className="grid grid-cols-1 gap-6 w-full">
        {challenges?.slice(0, 3).map((challenge, index) => (
          <Link to={`/challenges/${challenge.challenge_id}`}>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 w-full" key={index}>
            <div className="w-full card shadow-lg h-82 lg:mb-6 sm:mb-0">
              <h2 className="mb-2 text-xl lg:mt-4 font-semibold">{challenge.game.title}</h2>
              <img
                src={challenge.game.image_url}
                alt={challenge.game.title}
                className="h-full object-cover rounded-lg border-1 border-primary w-full
                          transition-transform transition-filter duration-300 ease-in-out
                          filter hover:grayscale hover:contrast-100"
                draggable="false"
                loading="lazy"
              />
            </div>
            <div className="w-full">
              <h2 className="md:text-2xl lg:text-3xl mb-2 md:mt-10 lg:mt-12">{challenge.title}</h2>
              <hr />
              <p className="text-lg text-muted-foreground mb-4">
                {challenge.description}
              </p>
              <p className="md:text-sm text-md text-muted-foreground mb-6">
                {challenge.rules}
              </p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default PopularChallenges