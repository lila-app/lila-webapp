import { supabase } from "../supabaseClient";

export const githubLogin = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "github",
  });
};

export const googleLogin = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "google",
  });
};