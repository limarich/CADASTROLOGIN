/* eslint-disable prettier/prettier */
import express from "express";
import UserController from "../controllers/UserController";
import Validate from "../helpers/Validate";
const router = express.Router();

router.post("/create",Validate.create,UserController.createUser)
router.post("/login", Validate.login ,UserController.login);
router.get("/users",UserController.showUsers);
router.get("/user/:id", Validate.showUser,UserController.showUser);
router.put("/update",Validate.update,UserController.updateUser);
router.put("/changepassword",Validate.changePassword ,UserController.changePassword);
router.delete("/remove", Validate.remove,UserController.destroyUser);

export { router };
