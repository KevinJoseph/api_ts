import DatabaseBootstrap from "../../../bootstrap/database.bootstrap";
import { User } from "../domain/user";
import { UserRepository } from "../domain/user.repository";
import { UserGetAllDto } from "./dtos/user-get-all.dto";
import { UserEntity } from "./entities/user.entity";
import { UserModelDto } from "./dtos/user-models.dto";
import { Result, err, ok } from "neverthrow";
import { UserInsertException } from "./exceptions/user.exception";

export class UserInfrastructure implements UserRepository{
    async insert(user: User): Promise<Result<UserEntity, UserInsertException>> {
        try {
            const repository = DatabaseBootstrap.dataSource.getRepository(UserEntity)
            const userEntity = UserModelDto.fromDomainToData(user);
            const userInserted = await repository.save(userEntity)
            return ok(userInserted)
        } catch (error) {
            return err(new UserInsertException(error.message))
        }

    }
    
    getAll(): any{
        /*
        const results: UserEntity[] = [
            new UserEntity("Jhon Doe","john.doe@correo.com", "123456","IT"),
            new UserEntity("Jane Doe","jane.doe@correo.com", "123456","IT"),
            new UserEntity("Jhon Smith","john.smith@correo.com", "123456","Supply Chain")
        ]
        return UserGetAllDto.fromDataToDomain(results);
        */
    }
}