import supabase from "./database/server.js";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "POST only" });
    }

    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const cleanEmail = email.trim();
        if (!cleanEmail.includes("@")) {
        return res.status(400).json({ success: false, message: "Invalid email format" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert into users table
        const { error } = await supabase.from("users").insert({
        name,
        email: cleanEmail,
        password: hashedPassword
        });

        if (error) {
        return res.status(400).json({ success: false, message: error.message });
        }

        return res.status(200).json({ success: true, message: "Registered successfully!" });
    } catch (err) {
        console.error("Register error:", err);
        return res.status(500).json({ success: false, message: "Server error", err });
    }
}
