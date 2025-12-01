export const loginUser = async (email, password) => {
    const res = await fetch("/api/loginUsers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    return res.json();
};