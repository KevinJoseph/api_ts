export interface UserEssentials {
    readonly id: string;
    readonly name: string;
    readonly lastname: string;
    readonly email: string;
    readonly password: string;
    readonly roles: string[];
}

export interface UserOptionals {
    readonly active: boolean
    readonly createdAt: Date
    readonly updatedAt: Date | null
    readonly deletedAt: Date | null
}

export type UserProperties = UserEssentials & Partial<UserOptionals>;

export class User {
    public readonly id: string;
    public name: string;
    public lastname: string;
    public email: string;
    public password: string;
    public roles: string[];
    public active: boolean;
    public readonly createdAt: Date;
    public updatedAt: Date | null;
    public deletedAt: Date | null;
    /*
    constructor(
        id: string,
        name: string,
        lastname: string,
        email: string,
        password: string,
        active: string,
        createdAt: Date,
        updatedAt: Date | null,
        deletedAt: Date | null

    ){
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.active = active;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
        
    }
    */

    constructor(properties: UserProperties){
        this.active = true;
        this.createdAt = new Date();
        Object.assign(this, properties);
    }

    properties(): UserProperties{
        return {
            id: this.id,
            name: this.name,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
            roles: this.roles,
            active: this.active,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt
        }
    }

    update(properties: Partial<UserProperties>): void {
        Object.assign(this, properties);
        this.updatedAt = new Date();
    }
    
    delete():void{
        this.active = false;
        this.deletedAt = new Date();
    }
}
