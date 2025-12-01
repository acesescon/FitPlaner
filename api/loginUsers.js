// api/loginUsers.js
import { supabase } from "./database/server.js";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    // Manual JSON parsing (necessary sa Vercel if not Next.js)
    let body = {};
    try {
      body = await new Promise((resolve, reject) => {
        let data = '';
        req.on('data', chunk => data += chunk);
        req.on('end', () => resolve(JSON.parse(data)));
        req.on('error', err => reject(err));
      });
    } catch (err) {
      return res.status(400).json({ error: "Invalid JSON", err });
    }

    const { email, password } = body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Fetch user from Supabase
    const { data: users, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .limit(1);

    if (error) throw error;

    if (!users || users.length === 0) {
      return res.status(400).json({ error: "Email not found" });
    }

    const user = users[0];

    if (user.password !== password) {
      return res.status(400).json({ error: "Incorrect password" });
    }

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Login function error:", err);
    return res.status(500).json({ error: "Internal server error", detail: err.toString() });
  }
}
