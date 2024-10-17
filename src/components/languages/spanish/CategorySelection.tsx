import { useState } from "react";

import CategoryButton from "../../CategoryButton";
import GrammarSelection from "./GrammarSelection";
import MediaSelection from "./MediaSelection";

type LearningType = "grammar" | "media";

const CategorySelection = () => {
  const [learningType, setLearningType] = useState<LearningType>("grammar");
  
  const onGrammarClick = () => {
    setLearningType("grammar");
  };

  const onMediaClick = () => {
    setLearningType("media");
  };

  return (
    <div>
      <div className="flex justify-center space-x-4 mt-10">
        <CategoryButton
          additionalBorderClass={`p-2 ${
            learningType === "grammar" ? "border-red-500 border-2" : ""
          }`}
          onClickFunction={onGrammarClick}
          buttonText="grammar"
        />
        <CategoryButton
          onClickFunction={onMediaClick}
          buttonText="media"
          additionalBorderClass={learningType === "media" ? "border-red-500 border-2" : ""}
        />
      </div>

      {learningType === "grammar" ? <GrammarSelection /> : <MediaSelection />}
    </div>
  );
};

export default CategorySelection;
