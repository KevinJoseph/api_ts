import { User, UserProperties } from "./user";
import {v4 as uuidv4} from "uuid"
import { EmailVO } from "./value-objects/email.vo";
import { Result, err, ok } from "neverthrow";
import { EmailInvalidException } from "./exceptions/domain.exception";

export type UserResult = Result<User, EmailInvalidException | Error>
export class UserFactory {
    static readonly patternEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    static create(name: string, lastname: string, email: string, password: string): UserResult{
        if(name.length < 3){
            return err(new Error("Name is too short"));
        }

        if(password.length < 6){
            return err(new Error("Password is too short"));
        }

        if(email.trim().length == 0){
            return err(new Error("Email is required"))
        }

        const emailResult = EmailVO.create(email)

        if(emailResult.isErr){
           return err(emailResult.error)
        }
 

        const properties: UserProperties = {
            id: uuidv4(),
            name,
            lastname,
            email: emailResult.value.getValue(),
            password,
            roles: []
        }
       
        return ok(new User(properties))
    }
}