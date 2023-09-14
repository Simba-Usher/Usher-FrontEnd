import axios from "axios";

const instance = axios.create({
  baseURL: "http://welcometousher.site/",
  // baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
//     'Authorization': `Bearer ${token}`,
  },
});

export default instance;