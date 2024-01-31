import DatabaseBootstrap from "../../../bootstrap/database.bootstrap";
import { User } from "../domain/user";
import { UserRepository } from "../domain/user.repository";
import { UserGetAllDto } from "./dtos/user-get-all.dto";
import { UserEntity } from "./entities/user.entity";
import { UserModelDto } from "./dtos/user-models.dto";

export class UserInfrastructure implements UserRepository{
    async insert(user: User) {
        const repository = DatabaseBootstrap.dataSource.getRepository(UserEntity)
        const userEntity = UserModelDto.fromDomainToData(user);
        await repository.save(userEntity)
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