const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/create", userController.createUser);
router.get("/:id", userController.getUser);
router.put("/:id", userController.userUpdate);

module.exports = router;
