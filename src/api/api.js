export async function apiRequest(endpoint, method = "GET", data) {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const res = await fetch(endpoint, {
    method,
    headers,
    ...(data && { body: JSON.stringify(data) }),
  });

  return res.json();
}