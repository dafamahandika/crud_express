const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/users", authMiddleware, userController.getUsers);
router.get("/users/:id", authMiddleware, userController.getUserById);
router.post("/users", authMiddleware, userController.createUser);
router.put("/users/:id", authMiddleware, userController.updateUser);
router.delete("/users/:id", authMiddleware, userController.deleteUser);

module.exports = router;
