const express = require("express");
const app = express();
require("dotenv").config();
const port = 8000;

const connectMongo = require("./config/mongo.config");
const postRoutes = require("./src/routes/post.route");

connectMongo();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(postRoutes);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});