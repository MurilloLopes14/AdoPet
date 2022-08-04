const express = require("express");
const router = express.Router();

//Controllers
const {
  register,
  login,
  getCurrentUser,
  update,
} = require("../controllers/userController");

//Middlewares
const {
  createUserValidation,
  loginUserValidation,
  updateUserValidation,
} = require("../middlewares/userValidation");
const { imageUpload } = require("../middlewares/imageUpload");
const validate = require("../middlewares/handleValidation");
const authGuard = require("../middlewares/authGuard");

router.post("/sign", createUserValidation(), validate, register);
router.post("/login", loginUserValidation(), validate, login);
router.get("/profile", authGuard, getCurrentUser);
router.put(
  "/update/profile",
  authGuard,
  updateUserValidation(),
  validate,
  imageUpload.single("profileImage"),
  update
);

module.exports = router;
