import {Request,Response} from "express";
import { User } from "../models/User";
class UserController {
    // CREATE
    async createUser(req:Request, res:Response) {
        const {name,email,password} = req.body;
        const user = await User.create({name, email, password});
        return res.status(201).json(user);
    }
    // READ ALL
     async showUsers(req:Request, res:Response) {
        const users = await User.findAll();
        return users.length > 0 ? res.status(200).json(users) : res.status(204).send();
    }
    // READ ONE
     async showUser(req:Request, res:Response) {
        const {id} = req.params;
        const user = await User.findAll({where: {id:id}});
        return user ? res.status(200).json(user) : res.status(204).send();
    }
    // UPDATE
     async updateUser(req:Request, res:Response) {
        const {id, name, email, password} = req.body;
        await User.update({id, name, email, password }, {where:{id:id}});
        return res.status(204).send();
    }
    // DELETE ONE
     async destroyUser(req:Request, res:Response) {
        const {id} = req.body;
        await User.destroy({where:{id:id}});
        return res.status(204).send();
    }

}

export default new UserController();