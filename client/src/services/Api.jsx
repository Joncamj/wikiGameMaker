import axios from "axios";
import LoginForm from "../components/LoginForm";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  headers: { "Content-Type": "application/json" }
})

export async function login (credentials){

    const response = await
      instance.post(
    '/auth/login',
    credentials
  )

  
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  } else {
    throw new Error ("invalid token")
  }

}


export default instance;