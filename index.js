const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000;
const cors = require("cors");
const connectMongo = require("./config/mongo.config");

const postRoute = require("./src/routes/post.route");
const bookingRoute = require("./src/routes/booking.route");
const commentRoute = require("./src/routes/comment.route");
const shopRoute = require("./src/routes/shop.route");

connectMongo();

app.use(express.json());
app.use(cors());

app.use(postRoute);
app.use(bookingRoute);
app.use(commentRoute);
app.use(shopRoute);

app.get("/", (req, res) => {
  res.send("Enfin je peux lire l'index!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
