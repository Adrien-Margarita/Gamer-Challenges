import { Link } from "react-router-dom";
import { VoteButtonChallenge } from "./ui/VoteButtonChallenge";

type Props = {
  challenge: {
    challenge_id: string;
    title: string;
    image_url: string;
  };
};

export default function ChallengeCard({ challenge }: Props) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg border-1 border-primary relative group transition-transform transition-filter duration-300 ease-in-out">
      <Link to={`/challenges/${challenge.challenge_id}`} className="flex flex-col h-full">
        <img
          src={challenge.image_url}
          alt={challenge.title}
          className="w-full h-[180px] object-cover border border-primary
          transition-transform transition-filter duration-300 ease-in-out
          filter hover:grayscale hover:contrast-100 transform scale-100 hover:scale-110 rounded-lg"
          draggable="false"
          loading="lazy"
        />
      </Link>
      <div className="absolute flex items-center bottom-0 left-0 w-full px-4 py-2 transition-opacity duration-300 bg-[#12243E] opacity-0 group-hover:opacity-100">
        <h3 className="text-lg w-full font-semibold text-white">{challenge.title}</h3>
        <div className="flex justify-between items-center">
          <VoteButtonChallenge challengeId={challenge.challenge_id} />
          {/* <div className="text-right text-2xl font-semibold"> */}
            {/* TODO: Affichage des nombres de challenge par jeu */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
