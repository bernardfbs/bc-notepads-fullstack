import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.post(import.meta.env.VITE_API_BASE_URL, {
  title: "Um novo título",
  subtitle: "Um novo subtítulo",
  content: "Um novo conteúdo",
});
