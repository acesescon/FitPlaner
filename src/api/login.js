export async function loginUser(email, password) {
  const res = await fetch("/api/loginUsers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  return data;
}
