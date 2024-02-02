export class UserInsertException extends Error {
    status: number = 500;

    constructor(message: string){
        super(UserInsertException.getMessage(message));
        this.name = "UserInsertException";
    }

    static getMessage(message: string){
        return `An Error ocurred while inserting the user: ${message}`
    }
}