import axios from "axios";

export default function useAxiosInstance() {
  const instance = axios.create({
    baseURL: "https://11.fesp.shop",
    timeout: 1000 * 15,
    headers: {
      "client-id": "final06",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });

  return instance;
}