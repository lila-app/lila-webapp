import MenuLink from "./MenuLink";

const LanguageSelection = () => {
  return (
    <ul className="space-y-4">
      <li>
        <MenuLink route="/singleplayer/english" title="🇬🇧 English" />
      </li>
      <li>
        <MenuLink route="/singleplayer/french" title="🇫🇷 French" />
      </li>
      <li>
        <MenuLink route="/singleplayer/german" title="🇩🇪 German" />
      </li>
      <li>
        <MenuLink route="/singleplayer/spanish" title="🇪🇸 Spanish" />
      </li>
      <li>
        <MenuLink route="/singleplayer/italian" title="🇮🇹 Italian" />
      </li>
      <MenuLink route="/" title="go back" />
    </ul>
  );
};

export default LanguageSelection;
