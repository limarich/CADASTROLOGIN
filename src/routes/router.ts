import express from "express";
import UserController from "../controllers/UserController"
const router = express.Router();

router.post('/create', UserController.createUser);
router.get('/users', UserController.showUsers);
router.get('/user/:id', UserController.showUser);
router.put('/update',  UserController.updateUser);
router.delete('/remove',  UserController.destroyUser);

export {router};
