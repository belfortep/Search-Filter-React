import express from "express";
const app = express();
import { Users } from "./users.js";
import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {
  const query = req.query.q;

  const keys = ['first_name', 'last_name', 'email'];

  const search = (data) => {
    return data.filter(item => keys.some(key => item[key].toLowerCase().includes(query)));  //agarro al usuario y verifico por cada una de las "llaves" para filtrarlo.
  };

  res.json(search(Users))

});

app.listen(5000, () => console.log("Server on port 5000"));
