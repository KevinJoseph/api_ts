import { Request, Response } from "express";

import { UserRepository } from "../domain/user.repository";
import { UserInfrastructure, UserInsertResult } from "../infrastructure/user.infrastructure";
import { UserApplication, UserInsertResultApplication } from "../application/user.application";
import { UserFactory, UserResult } from "../domain/user.factory";

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
        const userResult: UserResult = UserFactory.create(name,lastname,email, password)
        
        if(userResult.isErr()){
            return res.status(400).json({
                name: userResult.error.name,
                message: userResult.error.message
            })
        }
        
        const userInsertResult: UserInsertResultApplication = await userApplication.insert(userResult.value);

        if(userInsertResult.isErr()){
            return res.status(400).json({
                name: userInsertResult.error.name,
                message: userInsertResult.error.message
            })
        }

        res.status(201).json(userInsertResult.value)
    }
}

export default UserController;