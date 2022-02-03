import {Request,Response} from "express";
import { User } from "../models/User";
class UserController {
    async createUser(req:Request, res:Response) {
        const {name,email,password} = req.body;
        const user = await User.create({name, email, password});
        if(user) {
            res.status(201).send({message:"criado com sucesso"});
        } else {
            res.status(401).send({message:"não foi possível cadastrar o usuário"});
        }
    }
     async showUsers(req:Request, res:Response) {

    }
     async showUser(req:Request, res:Response) {

    }
     async updateUser(req:Request, res:Response) {

    }
     async destroyUser(req:Request, res:Response) {

    }

}

export default new UserController();