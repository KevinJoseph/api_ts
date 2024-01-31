import { User, UserProperties } from "./user";
import {v4 as uuidv4} from "uuid"

export class UserFactory {
    static readonly patternEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    static create(name: string, lastname: string, email: string, password: string): User{
        if(name.length < 3){
            throw new Error("Name is too short");
        }

        if(password.length < 6){
            throw new Error("Password is too short");
        }

        if(!this.patternEmail.test(email)){
            throw new Error("Email is not valid");
        }

        const properties: UserProperties = {
            id: uuidv4(),
            name,
            lastname,
            email,
            password,
            roles: []
        }
       
        return new User(properties)
    }
}