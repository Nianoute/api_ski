const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000;
const connectMongo = require("./config/mongo.config");

connectMongo();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Enfin je peux lire l'index!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
