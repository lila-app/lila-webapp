import MenuLink from "../../MenuLink";
import CategorySelection from "./CategorySelection";

const Spanish = () => {
  return (
    <div className="flex flex-col space-y-8 mt-10">
      <CategorySelection />
      <MenuLink route="/courses/spanish" title="see spanish course page" />
      <MenuLink route="/singleplayer" title="go back" />
    </div>
  );
};

export default Spanish;
