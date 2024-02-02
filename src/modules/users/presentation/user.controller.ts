import { Request, Response } from "express";

import { UserRepository } from "../domain/user.repository";
import { UserInfrastructure } from "../infrastructure/user.infrastructure";
import { UserApplication } from "../application/user.application";
import { UserFactory } from "../domain/user.factory";

const userInfrastructure: UserRepository = new UserInfrastructure();
const userApplication: UserApplication = new UserApplication(userInfrastructure);

class UserController{

    constructor(){
        this.getAll = this.getAll.bind(this);
        this.insert = this.insert.bind(this);
    }

    mockUsers(){
        return [
            {name: "User 1", age: 30},
            {name: "User 2", age: 20},
        ];
    }

    getAll(req: Request , res: Response){
        res.json(userApplication.getAll());
    }

    async insert(req: Request, res: Response){
        const {name, lastname, email, password} = req.body;
        const userToInsert = UserFactory.create(name,lastname,email, password)
        const userResult = await userApplication.insert(userToInsert);

        if(userResult.isErr()){
            return res.status(userResult.error.status).json({
                name: userResult.error.name,
                status: userResult.error.status,
                message: userResult.error.message
            })
        }

        res.status(201).json(userResult.value)
    }
}

export default UserController;