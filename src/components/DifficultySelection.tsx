type DifficultyLevel = "a1" | "a2" | "b1" | "b2" | "c1" | "c2";

interface DifficultySelectionProps {
  wordDifficulty: DifficultyLevel;
  setWordDifficulty: (level: DifficultyLevel) => void;
}

const DifficultySelection: React.FC<DifficultySelectionProps> = ({
  wordDifficulty,
  setWordDifficulty,
}) => {
  const difficultyLevels: DifficultyLevel[] = [
    "a1",
    "a2",
    "b1",
    "b2",
    "c1",
    "c2",
  ];

  const handleChange = (difficultyLevel: DifficultyLevel) => {
    setWordDifficulty(difficultyLevel);
  };

  const setAdditionalBorderClass = (level: DifficultyLevel) => {
    return wordDifficulty === level ? "border-red-500 border-2" : "";
  };

  return (
    <div className="grid grid-cols-2 gap-2 justify-center m-15 p-5">
      {difficultyLevels.map((level) => (
        <label
          key={level}
          className={`${setAdditionalBorderClass(
            level
          )} w-24 p-2 flex items-center space-x-4 text-xl bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition duration-300 cursor-pointer`}
        >
          <input
            type="radio"
            name="difficulty"
            value={level}
            checked={wordDifficulty === level}
            onChange={() => handleChange(level)}
            className="form-radio h-6 w-6 text-white focus:ring-2 focus:ring-purple-400 transition duration-300"
          />
          {level.toUpperCase()}
        </label>
      ))}
    </div>
  );
};

export default DifficultySelection;
