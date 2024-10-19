type NumberOfRounds = 5 | 10 | 15;

interface NumberOfRoundsSelectionProps {
  numberOfGameRounds: NumberOfRounds;
  setNumberOfGameRounds: (level: NumberOfRounds) => void;
}

const NumberOfRoundsSelection: React.FC<NumberOfRoundsSelectionProps> = ({
  numberOfGameRounds,
  setNumberOfGameRounds,
}) => {
  const availableRounds: NumberOfRounds[] = [5, 10, 15];

  const handleChange = (rounds: NumberOfRounds) => {
    setNumberOfGameRounds(rounds);
  };

  const setAdditionalBorderClass = (rounds: NumberOfRounds) => {
    return numberOfGameRounds === rounds ? "border-red-500 border-2" : ""; // Added this function to handle red border
  };

  return (
    <div className="flex flex-col justify-center space-y-4">
      {availableRounds.map((rounds) => (
        <label
          key={rounds}
          className={`${setAdditionalBorderClass(
            rounds
          )} flex items-center space-x-4 text-xl bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition duration-300 cursor-pointer p-4 mx-auto w-64`}
        >
          <input
            type="radio"
            checked={numberOfGameRounds === rounds}
            onChange={() => handleChange(rounds)}
            className="form-radio h-6 w-6 text-white focus:ring-2 focus:ring-purple-400 transition duration-300 mr-2"
          />
          {rounds} rounds
        </label>
      ))}
    </div>
  );
};

export default NumberOfRoundsSelection;
