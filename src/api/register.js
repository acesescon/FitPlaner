export async function registerUser(name, email, password) {
    const res = await fetch("/api/registerUsers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ // datas to send 
            name, 
            email, 
            password 
        }), 
    });

    const data = await res.json();
    return data;
}
