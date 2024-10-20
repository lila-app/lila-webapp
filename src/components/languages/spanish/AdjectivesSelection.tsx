import { useState } from "react";

import NumberOfRoundsSelection from "../../NumberOfRoundsSelection";
import StartGameButton from "../../StartGameButton";

type grammarType = "adjectives";
type NumberOfGameRounds = 5 | 10 | 15;

interface AdjectivesSelectionProps {
  grammarType: grammarType;
}
const AdjectivesSelection: React.FC<AdjectivesSelectionProps> = ({
  grammarType,
}) => {
  const [numberOfGameRounds, setNumberOfGameRounds] =
    useState<NumberOfGameRounds>(5);

  const targetLanguage = "spanish";

  return (
    <div className="flex flex-col">
      <NumberOfRoundsSelection
        numberOfGameRounds={numberOfGameRounds}
        setNumberOfGameRounds={setNumberOfGameRounds}
      />
      <StartGameButton
        numberOfGameRounds={numberOfGameRounds}
        targetLanguage={targetLanguage}
        sourceLanguage="english"
        grammarType={grammarType}
      />
    </div>
  );
};

export default AdjectivesSelection;
