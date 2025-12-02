import supabase from "./database/server.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "POST only" });
  }

  try {
    const { name, email, password } = req.body; // ✅ use req.body directly

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const cleanEmail = email.trim();
    if (!cleanEmail.includes("@")) {
      return res.status(400).json({ success: false, message: "Invalid email format" });
    }

    // Register in Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email: cleanEmail,
      password,
    });

    if (error) {
      return res.status(400).json({ success: false, message: error.message });
    }

    const user = data.user;

    // Insert extra info in users table
    const { error: profileError } = await supabase.from("users").insert({
      auth_id: user.id,
      name,
      email: cleanEmail,
    });

    if (profileError) {
      return res.status(400).json({ success: false, message: profileError.message });
    }

    return res.status(200).json({ success: true, message: "Registered successfully!" });
  } catch (err) {
    console.error("Register error:", err);
    return res.status(500).json({ success: false, message: "Server error", err });
  }
}
