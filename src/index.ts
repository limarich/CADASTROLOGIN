import express, { json } from "express";
import { sequelize } from "./db/db";
import { router } from "./routes/router";
import path = require("path");
import { errors } from "celebrate";
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const app = express();

app.use(json());
app.use(router);

app.use(errors());
sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log(`App rodando na porta 3000`);
    });
  })
  .catch((err) => console.log(err));
