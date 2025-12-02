import supabase from "./database/server.js"; 

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(400).json({ message: "POST only" });
    }

    try {
        // 1️⃣ Manual JSON parsing
        let body = "";
        await new Promise((resolve, reject) => {
        req.on("data", chunk => body += chunk);
        req.on("end", resolve);
        req.on("error", reject);
        });

        const { name, email, password } = JSON.parse(body);

        // 2️⃣ Validate fields
        if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // 3️⃣ Register user in Supabase Auth
        const { data, error } = await supabase.auth.signUp({ email, password });

        if (error) {
        return res.status(400).json({ success: false, message: error.message });
        }

        const user = data.user;

        // 4️⃣ Insert extra info in your `users` table (no password)
        const { error: profileError } = await supabase
        .from("users")
        .insert({
            id: user.id,
            name,
            email,
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
