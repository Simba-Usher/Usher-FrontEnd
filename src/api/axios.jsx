import axios from "axios";

const token = "your_access_token_here";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${token}`,
  },
});

export default instance;
