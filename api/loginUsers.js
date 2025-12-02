import supabase from "./database/server.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, password } = req.body; // ✅ Vercel auto-parses JSON

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  // Step 1: Login via Supabase Auth
  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (authError) {
    return res.status(400).json({ error: authError.message });
  }

  const authUser = authData.user;

  // Step 2: Fetch extra info from your `users` table
  const { data: profile, error: profileError } = await supabase
    .from("users")
    .select("*")
    .eq("id", authUser.id) // use 'id' if users.id matches Auth UUID
    .single();

  if (profileError) {
    return res.status(400).json({ error: profileError.message });
  }

  return res.status(200).json({
    message: "Login successful",
    user: profile,
    session: authData.session,
  });
}
