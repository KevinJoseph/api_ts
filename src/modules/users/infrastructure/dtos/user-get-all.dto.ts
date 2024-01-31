import { UserEntity } from "../entities/user.entity";
import { User } from "../../domain/user";

export class UserGetAllDto {
    /*
    static fromDataToDomain(data: UserEntity[]): User[]{
        return data.map((user) => {
            return new User(user.name, user.lastname, user.email, user.password)
        })
    }
    */
}