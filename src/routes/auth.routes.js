const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controller");

const endpoint = "/auth";

router.get(endpoint, AuthController.get);
router.post(`${endpoint}/login`, AuthController.login);
router.post(`${endpoint}/register`, AuthController.register);

module.exports = router;