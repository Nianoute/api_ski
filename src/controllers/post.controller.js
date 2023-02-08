const Post = require("../models/post.model");

const postController = {
    getAll: async (req, res) => {
      try {
        console.log("test")
      } catch (error) {
        res.status(400).send(error);
      }
    },
  };
  
  module.exports = postController;