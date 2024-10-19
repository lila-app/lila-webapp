import { useState } from "react";

import NumberOfRoundsSelection from "../../NumberOfRoundsSelection";
import StartGameButton from "../../StartGameButton";

type grammarType = "nouns";
type NumberOfGameRounds = 5 | 10;

interface NounSelectionProps {
  grammarType: grammarType;
}

const NounSelection: React.FC<NounSelectionProps> = ({ grammarType }) => {
  const [numberOfGameRounds, setNumberOfGameRounds] =
    useState<NumberOfGameRounds>(5);

  return (
    <div className="flex flex-col">
      <NumberOfRoundsSelection
        numberOfGameRounds={numberOfGameRounds}
        setNumberOfGameRounds={setNumberOfGameRounds}
      />
      <StartGameButton
        numberOfGameRounds={numberOfGameRounds}
        targetLanguage="spanish"
        sourceLanguage="english"
        grammarType={grammarType}
      />
    </div>
  );
};

export default NounSelection;
