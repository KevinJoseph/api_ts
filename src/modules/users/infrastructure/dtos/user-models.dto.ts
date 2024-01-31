import { plainToClass, plainToInstance } from "class-transformer";
import { User, UserProperties } from "../../domain/user";
import { UserEntity } from "../entities/user.entity";

export class UserModelDto{
    static fromDomainToData(user: User): UserEntity{
       const userProperties: UserProperties = user.properties();

        const userEntity = new UserEntity();
        userEntity.id = userProperties.id;
        userEntity.name = userProperties.name;
        userEntity.lastname = userProperties.lastname;
        userEntity.email = userProperties.email;
        userEntity.password = userProperties.password;
        userEntity.active = userProperties.active;
        //userEntity.roles = userProperties.roles;
        userEntity.createdAt = userProperties.createdAt;
        userEntity.updatedAt = userProperties.updatedAt;
        userEntity.deletedAt = userProperties.deletedAt;

        return userEntity;    
    }
}