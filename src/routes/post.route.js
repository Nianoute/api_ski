const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");

const endpoint = "/api/posts";

router.get(endpoint, postController.getAll);
router.post(endpoint, postController.create);

module.exports = router;