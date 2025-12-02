export async function registerUser(name, email, password) {
    try {
        const res = await fetch("/api/registerUsers", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({ name, email, password }),
        });

        const data = await res.json();

        if (!data.success) {
        // handle error
        return { success: false, message: data.message || "Registration failed" };
        }

        return { success: true, message: data.message };

    } catch (err) {
        console.error("Register API error:", err);
        return { success: false, message: "Network error" };
    }
}
