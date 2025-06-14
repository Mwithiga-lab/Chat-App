const API_URL = "http://localhost:5000/api/messages";

export async function fetchMessages() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function sendMessage(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}