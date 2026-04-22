const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function loginApi(email: string, password: string) {
  console.log("Sending login request:", email, password);

  const formData = new URLSearchParams();
  formData.append("username", email);   // MUST be username
  formData.append("password", password);

  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  });

  const data = await res.json();

  console.log("API RESPONSE:", data);

  if (!res.ok) {
    throw new Error(data.detail || "Login failed");
  }

  return data;
}