import { useState } from "react";

import EpisodeSelection from "./EpisodeSelection";

interface SeasonSelectionProps {
  selectedSeries: string;
}

const SeasonSelection: React.FC<SeasonSelectionProps> = ({
  selectedSeries,
}) => {
  const [selectedSeason, setSelectedSeason] = useState<number>(1);
  const suitsSeasons = [1, 2];
  const greysAnatomySeasons = [1, 2, 3];

  let seasonsToDisplay: number[] = [];

  if (selectedSeries === "Suits") {
    seasonsToDisplay = suitsSeasons;
  } else if (selectedSeries === "Greys Anatomy") {
    seasonsToDisplay = greysAnatomySeasons;
  }

  const onSeasonClick = (season: number) => {
    setSelectedSeason(season);
  };

  return (
    <div>
      {selectedSeries && (
        <ul className="flex space-x-4">
          {seasonsToDisplay.map((season) => (
            <li
              key={season}
              className={`cursor-pointer p-4 rounded-lg bg-purple-600 text-white hover:bg-purple-700 ${
                selectedSeason === season ? "border-red-500 border-2" : ""
              }`}
              onClick={() => onSeasonClick(season)}
            >
              Season {season}
            </li>
          ))}
        </ul>
      )}

      {selectedSeason && (
        <EpisodeSelection
          selectedSeries={selectedSeries}
          selectedSeason={selectedSeason}
        />
      )}
    </div>
  );
};

export default SeasonSelection;
