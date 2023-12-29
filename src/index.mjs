import fs from "fs";
import promptSync from 'prompt-sync';

const prompt = promptSync();

//const fs = require ("fs");
//const prompt = require ("prompt-sync")();

const algumaCoisa = prompt ("Digite qualquer coisa");

fs.writeFileSync('teste.txt', algumaCoisa)

console.log("Texto gravado com sucesso")