import { useState, useEffect } from "react";

import { supabase } from "../../supabaseClient";
import { Session } from "@supabase/supabase-js";

import TopBar from "../../components/TopBar";
import MenuLink from "../../components/MenuLink";
import Login from "../../components/Login";
import MenuBackground from "../../components/MenuBackground";
import LoginButton from "../../components/LoginButton";

const Home = () => {
  const [session, setSession] = useState<Session | null>(null);

  const logout = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (data?.session) {
        setSession(data.session);
      } else if (error) {
        console.error("Error fetching session:", error);
      }
    };

    fetchSession();

    // Set up real-time session listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session); // Automatically update session when it changes
      }
    );

    // Clean up the listener on component unmount
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (session) {
    return (
      <div className="bg-purple-100 min-h-screen">
        <TopBar heading="lila" />
        <MenuBackground>
          <div className="flex flex-col items-center space-y-6 p-8  max-w-sm mx-auto">
            <MenuLink route="/singleplayer" title="singleplayer" />
            <MenuLink route="/multiplayer" title="multiplayer" />
            <MenuLink route="/courses" title="our courses" />
            <MenuLink route="/statistics" title="statistics" />
            <LoginButton onClickFunction={logout} buttonText="logout" />
          </div>
        </MenuBackground>
      </div>
    );
  }

  return (
    <div className="bg-purple-100 min-h-screen">
      <TopBar heading="lila" />
      <MenuBackground>
        <Login />
      </MenuBackground>
    </div>
  );
};

export default Home;
