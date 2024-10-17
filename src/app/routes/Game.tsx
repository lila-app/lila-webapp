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
  ipa: string;
  difficulty: string;
  english_translations?: string | string[];
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

  useEffect(() => {
    getWords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getWords() {
    const tableName = `${targetLanguage}_${grammarType}`;
    const { data } = await supabase.from(tableName).select();
    console.log("data: ", data);
    setWords(data ?? []);
  }

  return (
    <div className="bg-purple-100 min-h-screen">
      <TopBar heading="lila" />
      <MenuBackground>
        <div>
          <h1>Game Page</h1>
          <p>Word Difficulty: {wordDifficulty}</p>
          <p>Number of Game Rounds: {numberOfGameRounds}</p>
          <p>Target Language: {targetLanguage}</p>
          <p>Source Language: {sourceLanguage}</p>
          <p>Grammar Type: {grammarType}</p>
        </div>
        <div>
          {words.length === 0 ? (
            <p>No words available</p>
          ) : (
            <ul>
              {words.map((word, index) => (
                <li key={index} className="bg-purple-200 mb-4">
                  <p>{word.word}</p>
                  <p>IPA: {word.ipa}</p>
                  <p>Difficulty: {word.difficulty}</p>
                  <p>
                    English Translations:{" "}
                    {Array.isArray(word.english_translations)
                      ? word.english_translations.join(", ")
                      : word.english_translations}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </MenuBackground>
    </div>
  );
};

export default Game;

/*
gamelogic:

1. look for database table targetlanguage_grammarType eg spanish_nouns
2. fetch their objectiIds into array
3. put numberOfGameRounds of these ids into one array "wordsToPractice" (eg 5), the rest into another array "wrongSolutions"
4. round 1: show the word (eg casa) and 4 buttons, 1 button is the solution with the db entry of the id of the word case and english_translations (eg id12.english_tranlsations)
the other 3 buttons are english_translations of 3 objectIds of wrongSolutions
5. the user clicks on the right translation
*/
