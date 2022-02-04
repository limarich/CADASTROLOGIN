/* eslint-disable prettier/prettier */
import { Request, Response } from "express";
import { User } from "../models/User";
import bcrypt from "bcryptjs";
class UserController {
  // CREATE
  async createUser(req: Request, res: Response) {
    const { name, email, password, confirmPassword } = req.body;
    // passwordValidation
    if (password !== confirmPassword) {
      return res.status(400).send({error:"passwords do not match"});
    }
    // emailValidation
    const emailAlredyExists = await User.findOne({ where: { email: email } });
    if (emailAlredyExists) {
      return res.status(400).send({error:"email already registered"});
    }
    // generate password hash
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const user = {
      name: name,
      email: email,
      password: hashedPassword,
    };
    User.create(user)
      .then(() => {
        res.status(201).send();
      })
      .catch((err) => res.status(204).send(err));
  }

  // LOGIN
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });

    // check if email is valid
    if (!user) {
      return res.status(400).send({ error: "email/password is invalid" });
    }
    // check if password is valid
    const passwordsMatch = bcrypt.compareSync(password, (<any>user).password);
    if (!passwordsMatch) {
      return res.status(400).send({ error: "email/password is invalid" });
    }
    return res.status(200).send({ message: "user logged in successfully" });
  }

  // READ ALL USERS- RETURN A LIST OF NAMES AND EMAILS REGISTERED
  async showUsers(req: Request, res: Response) {
    const users = await User.findAll();
    const listUsers = users.map((user: any, id) => {
      return { name: user.name, email: user.email };
    });
    return users.length > 0
      ? res.status(200).json(listUsers)
      : res.status(204).send();
  }

  // READ ONE USER
  async showUser(req: Request, res: Response) {
    const { id } = req.params;
    const user = await User.findAll({ where: { id: id } });
    const listUser = user.map((user: any, id) => {
      return { name: user.name, email: user.email };
    });
    return user ? res.status(200).json(listUser) : res.status(204).send();
  }

  // UPDATE USER
  async updateUser(req: Request, res: Response) {
    const { id, name, email } = req.body;
    const user  = await User.findOne({where:{email:email}});
    if(user && (<any>user).id !== id) {return res.status(400).send({error:"email already registered"})}
    await User.update({ name, email }, { where: { id: id } }).then(()=> {return res.status(204).send()}).catch((err)=>{return res.status(400).send(err)});
  }

  // CHANGE PASSWORD
  async changePassword(req: Request, res: Response) {
    const { id, password, newPassword } = req.body;
    // VERIFY IF OLD PASSWORD IS VALID
    const user = await User.findOne({ where: { id: id } });
    const passwordsMatch = bcrypt.compareSync(password, (<any>user).password);
    if (passwordsMatch) {
      // generate new hash
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(newPassword, salt);
      await User.update({ password: hashedPassword }, { where: { id: id } });
      return res.status(200).send();
    }
    return res.status(204).send();
  }

  // DELETE USER
  async destroyUser(req: Request, res: Response) {
    const { id } = req.body;
    if(id) await User.destroy({ where: { id: id } });
    return res.status(204).send();
  }
}

export default new UserController();
