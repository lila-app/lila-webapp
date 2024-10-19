import { useState } from "react";

import NumberOfRoundsSelection from "../../NumberOfRoundsSelection";
import DifficultySelection from "../../DifficultySelection";
import StartGameButton from "../../StartGameButton";

type grammarType = "nouns";
type NumberOfGameRounds = 5 | 10;
type WordDifficulty = "a1" | "a2" | "b1" | "b2" | "c1" | "c2";

interface NounSelectionProps {
  grammarType: grammarType;
}

const NounSelection: React.FC<NounSelectionProps> = ({ grammarType }) => {
  const [wordDifficulty, setWordDifficulty] = useState<WordDifficulty>("a1");
  const [numberOfGameRounds, setNumberOfGameRounds] =
    useState<NumberOfGameRounds>(5);

  return (
    <div className="flex flex-col">
      <DifficultySelection
        wordDifficulty={wordDifficulty}
        setWordDifficulty={setWordDifficulty}
      />
      <NumberOfRoundsSelection
        numberOfGameRounds={numberOfGameRounds}
        setNumberOfGameRounds={setNumberOfGameRounds}
      />
      <StartGameButton
        wordDifficulty={wordDifficulty}
        numberOfGameRounds={numberOfGameRounds}
        targetLanguage="spanish"
        sourceLanguage="english"
        grammarType={grammarType}
      />
    </div>
  );
};

export default NounSelection;
