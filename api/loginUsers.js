// api/loginUsers.js
import { supabase } from "./database/server.js"; // ✔️ TAMA // server-side supabase client

export default async function handler(req, res) {
  try {
    // Only allow POST requests
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    // Extract email and password from request body
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // 1. Get user by email
    const { data: users, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .limit(1);

    // Handle Supabase errors
    if (error) throw error;

    // If no user found
    if (!users || users.length === 0) {
      return res.status(400).json({ error: "Email not found" });
    }

    const user = users[0];

    // 2. Compare password (simple match)
    // NOTE: In real apps, use hashing (bcrypt)
    if (user.password !== password) {
      return res.status(400).json({ error: "Incorrect password" });
    }

    // 3. Success
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Login function error:", err); // makikita sa Vercel logs
    return res.status(500).json({ error: "Internal server error" });
  }
}
