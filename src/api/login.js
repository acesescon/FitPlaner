export async function loginUser(email, password) {
  console.log("Calling /api/loginUsers with POST", email, password);
  const res = await fetch("/api/loginUsers", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  console.log("Response from API:", data);
  return data;
}
