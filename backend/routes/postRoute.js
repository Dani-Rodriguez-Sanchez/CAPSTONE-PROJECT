const express = require("express");
const router = express.Router();

const { createPost } = require("../controllers/postController");
const { isAuthenticated, isAdmin } = require("../middleware/auth");

//blog routes
router.post("/post/create", isAuthenticated, isAdmin, createPost);

module.exports = router;
