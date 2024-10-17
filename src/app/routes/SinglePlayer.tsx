import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { supabase } from "../../supabaseClient";
import { Session } from "@supabase/supabase-js";

import TopBar from "../../components/TopBar";
import MenuBackground from "../../components/MenuBackground";

import LanguageSelection from "../../components/LanguageSelection";

const SinglePlayer = () => {
  const [session, setSession] = useState<Session | null>(null);
  const location = useLocation();

  useEffect(() => {
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
        <TopBar heading="lila - singleplayer" />
        <MenuBackground>
          <Outlet />
          {location.pathname === "/singleplayer" && <LanguageSelection />}
        </MenuBackground>
      </div>
    );
  }

  // redirect to home, when theres no session
};

export default SinglePlayer;
