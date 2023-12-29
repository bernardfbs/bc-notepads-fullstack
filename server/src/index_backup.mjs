import express from "express";
import * as notepadService from "./notepad/notepad.service.mjs";

const port = 8080;
const host = "0.0.0.0";
const app = express();

app.get("/teste", (req, res) => {
res.send ("hello world");
});

app.listen(port, host, () => {
  console.log(`Servidor express iniciado em http://${host}:${port}`);
});
