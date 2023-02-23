const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000;
const cors = require("cors");
const connectMongo = require("./config/mongo.config");

const postRoute = require("./src/routes/post.routes");
const bookingRoute = require("./src/routes/booking.routes");
const commentRoute = require("./src/routes/comment.routes");
const shopRoute = require("./src/routes/shop.routes");
const authRoute = require("./src/routes/auth.routes")

connectMongo();

app.use(express.json());
app.use(cors());

app.use(postRoute);
app.use(bookingRoute);
app.use(commentRoute);
app.use(shopRoute);
app.use(authRoute)

app.get("/", (req, res) => {
  res.send("Enfin je peux lire l'index!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
