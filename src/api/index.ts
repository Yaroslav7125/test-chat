import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.lenzaos.com/",
  timeout: 1000,
  headers: { accept: "application/json", version: "0.0" },
});
