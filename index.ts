import express from "express";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();

app.listen(3000, ()=> {
  console.log(`App ${process.env.PROJECT_NAME} rodando na porta 3000`)
}) 