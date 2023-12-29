import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

api.post("http://localhost:8080", {
  title: "Um novo título",
  subtitle: "Um novo subtítulo",
  content: "Um novo conteúdo",
});
