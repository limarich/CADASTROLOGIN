import express, { json } from "express";
import { sequelize } from "./db/db";
import {router} from "./routes/router";
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const app = express();

app.use(json())
app.use(router)


app.listen(3000, async ()=> {
  await sequelize.sync() 
  console.log(`App rodando na porta 3000`)
}) 
