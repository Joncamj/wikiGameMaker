import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    // "Authorization" : `Bearer ${"BEARER_TOKEN"}`,
    "Content-Type": "application/json",
  },
});


export async function loginUser(credentials) {
  const response = await instance.post("/auth/login", credentials);

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    return response.data;
  } else {
    throw new Error("Invalid token");
  }
}

export async function registerUser(userData) {
  const response = await instance.post("/auth/register", userData);

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    return response.data;
  } else {
    throw new Error("Invalid token");
  }
}

export async function getProfile() {
  if (localStorage.getItem("token")) {
    const response = await instance.get("/auth/profile", {
      headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
  })  ;
    return response.data.user;
  }
  return;
}

export async function logoutUser() {
  const response = await instance.get("/auth/logout")
localStorage.removeItem("token")

if (response.data.success) {
  return response.data
} else {
  throw new Error("Logout failed")
}
}

export async function deleteAccount() {
  const response = await instance.delete("/auth/delete")
  localStorage.removeItem("token")

  if (response.data.success) {
    return response.data
  } else {
    throw new Error("Erreur")
  }
}

export default instance;