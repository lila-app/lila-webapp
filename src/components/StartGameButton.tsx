import { Link } from "react-router-dom";

interface StartGameButtonProps {
  numberOfGameRounds: 5 | 10;
  targetLanguage: string;
  sourceLanguage: string;
  grammarType: string;
}

const StartGameButton: React.FC<StartGameButtonProps> = ({
  numberOfGameRounds,
  targetLanguage,
  sourceLanguage,
  grammarType,
}) => {
  return (
    <Link
      to="/game"
      state={{
        numberOfGameRounds,
        targetLanguage,
        sourceLanguage,
        grammarType,
      }}
      className="m-10 p-4 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
    >
      start game
    </Link>
  );
};

export default StartGameButton;
