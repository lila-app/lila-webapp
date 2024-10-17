import { githubLogin, googleLogin } from "../utils/supabase";

import LoginButton from "./LoginButton";
import MenuLink from "./MenuLink";

const Login = () => {
  return (
    <div className="flex flex-col items-center space-y-6 p-8  max-w-sm mx-auto">
      <LoginButton onClickFunction={githubLogin} buttonText="githubs login" />
      <LoginButton onClickFunction={googleLogin} buttonText="google login" />
      <MenuLink route="/about" title="about lila" />
      <MenuLink route="/courses" title="our courses" />
      <MenuLink route="/statistics" title="statistics" />
    </div>
  );
};

export default Login;
