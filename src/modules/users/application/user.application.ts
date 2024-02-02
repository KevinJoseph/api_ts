import { UserRepository } from "../domain/user.repository";
import { User } from "../domain/user";
import { UserEntity } from "../infrastructure/entities/user.entity";
import { Result, err, ok } from "neverthrow";
import { UserInsertException } from "../infrastructure/exceptions/user.exception";
import { UserInsertResult } from "../infrastructure/user.infrastructure";
import { UserInsertDto } from "./dtos/user-insert.dto";

export type UserInsertResultApplication =  Result<UserInsertDto, any>
export class UserApplication {
    private repository: UserRepository;

    constructor(repository: UserRepository){
        this.repository = repository
    }

    getAll(): User[]{
        return this.repository.getAll();
    }

    async insert(user: User): Promise<UserInsertResultApplication>{
        const userResult = await this.repository.insert(user)
        if(userResult.isErr()){
            return err(userResult.error)
        }

        return ok(UserInsertDto.fromResponseToPresentation(userResult.value));
    }
}