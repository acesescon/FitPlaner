import supabase from "../src/api/database/server.js"; //import database 

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    // Extract email and password from request body
    const { email, password } = req.body;

    // 1. Get user by email
    const { data: users, error } = await supabase
        .from("users") //from users table in supabase
        .select("*") //select all columns
        .eq("email", email) //where email matches
        .limit(1); //limit to 1 result only
    
    // Handle errors
    if (error) return res.status(500).json({ error: error.message });

    // If no user found
    if (users.length === 0) {
        return res.status(400).json({ error: "Email not found" });
    }

    // User found
    const user = users[0];

    // 2. Compare password (simple match)
    // NOTE: In real apps, use hashing. Pero ito muna for basic example.
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
        }
    });
}