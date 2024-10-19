import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "../../supabaseClient";

import TopBar from "../../components/TopBar";
import MenuBackground from "../../components/MenuBackground";

interface GameState {
  wordDifficulty: "a1" | "a2" | "b1" | "b2" | "c1" | "c2";
  numberOfGameRounds: 5 | 10;
  targetLanguage: string;
  sourceLanguage: string;
  grammarType: string;
}

interface Word {
  id: string;
  created_at: string;
  word: string;
  ipa?: string;
  difficulty?: string;
  english_translations?: string | string[];
  grammatical_gender?: "masculine" | "feminine";
}

const Game = () => {
  const location = useLocation();
  const {
    wordDifficulty,
    numberOfGameRounds,
    targetLanguage,
    sourceLanguage,
    grammarType,
  } = location.state as GameState;

  const [words, setWords] = useState<Word[]>([]);
  const [wordsToPractice, setWordsToPractice] = useState<Word[]>([]);
  const [currentWord, setCurrentWord] = useState<Word>();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [solvedWords, setSolvedWords] = useState<Word[]>([]);
  const [notSolvedWords, setNotSolvedWords] = useState<Word[]>([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    getWords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (words.length > 0) {
      setupGame();
    }
  }, [words]);

  async function getWords() {
    const tableName = `${targetLanguage}_${grammarType}`;
    const { data } = await supabase.from(tableName).select();
    console.log("data: ", data);
    setWords(data ?? []);
    console.log(wordDifficulty, sourceLanguage)
  }

  const setupGame = () => {
    const shuffledWords = [...words].sort(() => Math.random() - 0.5);
    const selectedWords = shuffledWords.slice(0, numberOfGameRounds);
    console.log("words to practice: ", selectedWords);
    console.log("current word: ", selectedWords[0].word);
    setWordsToPractice(selectedWords);
    setCurrentWord(selectedWords[0]);
  };

  const handleElClick = () => {
    if (currentWord?.grammatical_gender === "masculine") {
      // Only add currentWord if it's defined
      if (currentWord) {
        setSolvedWords((prev) => [...prev, currentWord]);
      }
    } else {
      // Only add currentWord if it's defined
      if (currentWord) {
        setNotSolvedWords((prev) => [...prev, currentWord]);
      }
    }
    moveToNextWord();
  };
  
  const handleLaClick = () => {
    if (currentWord?.grammatical_gender === "feminine") {
      // Only add currentWord if it's defined
      if (currentWord) {
        setSolvedWords((prev) => [...prev, currentWord]);
      }
    } else {
      // Only add currentWord if it's defined
      if (currentWord) {
        setNotSolvedWords((prev) => [...prev, currentWord]);
      }
    }
    moveToNextWord();
  };

  const moveToNextWord = () => {
    const nextIndex = currentWordIndex + 1;
    if (nextIndex < wordsToPractice.length) {
      setCurrentWord(wordsToPractice[nextIndex]);
      setCurrentWordIndex(nextIndex);
    } else {
      setGameOver(true);
    }
  };

  const restartGame = () => {
    setSolvedWords([]);
    setNotSolvedWords([]);
    setCurrentWordIndex(0);
    setGameOver(false);
    setupGame();
  };

  return (
    <div className="bg-purple-100 min-h-screen">
      <TopBar heading="lila" />
      <MenuBackground>
        <div className="flex flex-col space-y-8">
          {gameOver ? (
            <div className="text-center">
              <h2 className="text-2xl">Game Over!</h2>
              <p className="text-lg">Solved words: {solvedWords.length}</p>
              <p className="text-lg">
                Not solved words: {notSolvedWords.length}
              </p>
              <button
                onClick={restartGame}
                className="mt-4 text-lg p-4 bg-purple-600 hover:bg-purple-700 text-white rounded"
              >
                Restart Game
              </button>
              {/* Optionally, you could display the lists of words */}
              <div className="mt-4">
                <h3 className="text-lg">Solved Words:</h3>
                <ul>
                  {solvedWords.map((word) => (
                    <li key={word.id}>{word.word}</li>
                  ))}
                </ul>
                <h3 className="text-lg">Not Solved Words:</h3>
                <ul>
                  {notSolvedWords.map((word) => (
                    <li key={word.id}>{word.word}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <>
              {currentWord && (
                <button className="block text-2xl w-64 p-6 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition duration-300 text-center mx-auto">
                  {currentWord.word}
                </button>
              )}
              <div className="flex space-x-8">
                <button
                  onClick={handleElClick}
                  className="block text-2xl w-64 p-6 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition duration-300 text-center mx-auto"
                >
                  el
                </button>
                <button
                  onClick={handleLaClick}
                  className="block text-2xl w-64 p-6 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition duration-300 text-center mx-auto"
                >
                  la
                </button>
              </div>
            </>
          )}
        </div>
      </MenuBackground>
    </div>
  );
};

export default Game;
