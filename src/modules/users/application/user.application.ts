import { UserRepository } from "../domain/user.repository";
import { User } from "../domain/user";
import { UserEntity } from "../infrastructure/entities/user.entity";
import { Result } from "neverthrow";
import { UserInsertException } from "../infrastructure/exceptions/user.exception";
import { UserInsertResult } from "../infrastructure/user.infrastructure";

export class UserApplication {
    private repository: UserRepository;

    constructor(repository: UserRepository){
        this.repository = repository
    }

    getAll(): User[]{
        return this.repository.getAll();
    }

    async insert(user: User): Promise<UserInsertResult>{
        return await this.repository.insert(user)
    }
}