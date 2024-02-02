import { UserInsertResultApp } from "../results/user-insert.result";

export class UserInsertDto{
    static fromResponseToPresentation(res: UserInsertResultApp): UserInsertDto{
        return{
            id: res.id,
            fullname: `${res.name} ${res.lastname}`,
            email: res.email
        }
    }
}