import express from "express";
import UserController from "../controllers/UserController";
import { celebrate } from "celebrate";
const validate = require("../helpers/validation");

const router = express.Router();

// LOGIN
router.post(
  "/login",
  celebrate({ body: validate.loginSchema }, { abortEarly: false }),
  UserController.login
);
// CREATE USER
router.post(
  "/create",
  celebrate({ body: validate.createSchema }, { abortEarly: false }),
  UserController.createUser
);
// GET USERS
router.get("/users", UserController.showUsers);
// GET USER BY ID
router.get(
  "/user/:id",
  celebrate({ params: validate.showUserSchema }, { abortEarly: false }),
  UserController.showUser
);
// UPDATE USER INFO
router.put(
  "/update",
  celebrate({ body: validate.updateSchema }, { abortEarly: false }),
  UserController.updateUser
);
// CHANGE PASSWORD
router.put(
  "/changepassword",
  celebrate({ body: validate.changePasswordSchema }, { abortEarly: false }),
  UserController.changePassword
);
// DESTROY USER BY ID
router.delete(
  "/remove",
  celebrate({ body: validate.removeSchema }, { abortEarly: false }),
  UserController.destroyUser
);

export { router };
