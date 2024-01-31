import { UserRepository } from "../domain/user.repository";
import { User } from "../domain/user";

export class UserApplication {
    private repository: UserRepository;

    constructor(repository: UserRepository){
        this.repository = repository
    }

    getAll(): User[]{
        return this.repository.getAll();
    }

    async insert(user: User): Promise<void> {
        return await this.repository.insert(user)
    }
}