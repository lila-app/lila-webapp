import { useState } from "react";

import CategoryButton from "../../CategoryButton";
import NounSelection from "./NounSelection";
import AdjectivesSelection from "./AdjectivesSelection";

type GrammarType = "nouns" | "adjectives";

const GrammarSelection = () => {
  const [grammarType, setGrammarType] = useState<GrammarType>("nouns");

  const onAdjectivesClick = () => {
    setGrammarType("adjectives");
  };

  const onNounsClick = () => {
    setGrammarType("nouns");
  };

  return (
    <>
      <div className="flex justify-center space-x-4 mt-10">
        <CategoryButton
          onClickFunction={onNounsClick}
          buttonText="nouns"
          additionalBorderClass={
            grammarType === "nouns" ? "border-red-500 border-2" : ""
          }
        />
        <CategoryButton
          onClickFunction={onAdjectivesClick}
          buttonText="adjectives"
          additionalBorderClass={
            grammarType === "adjectives" ? "border-red-500 border-2" : ""
          }
        />
      </div>

      {grammarType === "nouns" ? (
        <NounSelection grammarType={grammarType} />
      ) : (
        <AdjectivesSelection grammarType={grammarType} />
      )}
    </>
  );
};

export default GrammarSelection;
