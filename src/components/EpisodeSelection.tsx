interface EpisodeSelectioProps {
  selectedSeries: string;
  selectedSeason: number;
}

const EpisodeSelection: React.FC<EpisodeSelectioProps> = ({
  selectedSeries,
  selectedSeason,
}) => {
  const suitsSeason1Episodes = {
    episode1: "Pilot",
    episode2: "Errors and Omissions",
  };
  const suitsSeason2Episodes = {
    episode1: "She knows",
    episode2: "The Choice",
  };
  const greysSeason1Episodes = {
    episode1: "A Hard Day's Night",
    episode2: "The First Cut Is the Deepest",
  };
  const greysSeason2Episodes = {
    episode1: "Raindrops Keep Falling on My Head",
    episode2: "Enough Is Enough",
  };
  const greysSeason3Episodes = {
    episode1: "Time Has Come Today",
    episode2: "I Am a Tree",
  };

  let episodesToDisplay: { [key: string]: string } = {};

  switch (selectedSeries) {
    case "Suits":
      switch (selectedSeason) {
        case 1:
          episodesToDisplay = suitsSeason1Episodes;
          break;
        case 2:
          episodesToDisplay = suitsSeason2Episodes;
          break;
        default:
          episodesToDisplay = {};
          break;
      }
      break;

    case "Greys Anatomy":
      switch (selectedSeason) {
        case 1:
          episodesToDisplay = greysSeason1Episodes;
          break;
        case 2:
          episodesToDisplay = greysSeason2Episodes;
          break;
        case 3:
          episodesToDisplay = greysSeason3Episodes;
          break;
        default:
          episodesToDisplay = {};
          break;
      }
      break;

    default:
      episodesToDisplay = {};
      break;
  }

  return (
    <div className="mt-4">
      {selectedSeason && (
        <ul className="flex flex-col space-y-4">
          {Object.values(episodesToDisplay).map((episode, index) => (
            <li
              key={index}
              className="cursor-pointer p-4 rounded-lg bg-purple-600 text-white hover:bg-purple-700 border-2 border-transparent hover:border-red-500 transition duration-300"
            >
              {episode}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EpisodeSelection;
