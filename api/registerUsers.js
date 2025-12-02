// api/registerUsers.js
import supabase from "./database/server.js"; 

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(400).json({ message: "POST only" });
    }

    try {
        const { name, email, password } = req.body;

        // Step 1: Register user in Supabase Auth
        const { data, error } = await supabase.auth.signUp({
        email,
        password,
        });

        if (error) {
        return res.status(400).json({ success: false, message: error.message });
        }

        const user = data.user;

        // Step 2: Insert extra info in your `users` table (no password)
        const { error: profileError } = await supabase
        .from("users")
        .insert({
            id: user.id,   // match auth user id
            name,
            email,
        });

        if (profileError) {
        return res.status(400).json({ success: false, message: profileError.message });
        }

        return res.status(200).json({
        success: true,
        message: "Registered successfully!",
        });

    } catch (err) {
        return res.status(500).json({ success: false, message: "Server error", err });
    }
}
