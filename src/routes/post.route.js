const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");

const endpoint = "/posts";

router.get(endpoint, postController.getAll);

module.exports = router;