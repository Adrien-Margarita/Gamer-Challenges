import { useLastChallenges } from "@/hooks/useChallenge";
import { mdiArrowRightCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router";


function LastChallenges() {
    const { data: challenges } = useLastChallenges();
  
  return (
    <section>
      <div className="flex items-center justify-between text-secondary">
        <h2 className="text-2xl font-bold mb-4 mt-4">Les derniers challenges</h2>
        <Link to="/challenges">
          <Icon path={mdiArrowRightCircleOutline} size={1.4} />
        </Link>
      </div>      
      <hr />
      <div className="grid grid-cols-1 gap-6 w-full">
        {challenges?.slice(0, 3).map((challenge, index) => (
          <Link to={`/challenges/${challenge.challenge_id}`}>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 w-full" key={index}>
          <div className="w-full card shadow-lg h-82 lg:mb-6 sm:mb-0">
            <h3 className="mb-2 mt-4 font-semibold">{challenge.game.title}</h3>
              <img
                src={challenge.game.image_url}
                alt={challenge.game.title}
                className="w-full h-[500px] object-cover border border-primary
                transition-transform transition-filter duration-300 ease-in-out
                filter hover:grayscale hover:contrast-100 transform scale-100 hover:scale-110"
              />
            </div>
            <div className="w-full">
              <h3 className="md:text-2xl lg:text-3xl font-semibold mb-2 lg:mt-12 md:mt-12">{challenge.title}</h3>
              <p className="text-lg text-muted-foreground mb-4">
                {challenge.description}
              </p>
              <p className="text-md text-muted-foreground">
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

export default LastChallenges