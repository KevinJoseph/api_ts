import yenv from "yenv";

export interface IDbConfig{
    host: string;
    port: number;
    entities: string[];
    username: string;
    password: string;
    database: string;
    synchronize: boolean;
    logging: boolean;
}

export class AppService {
    private static readonly env = yenv();

     public static get PORT(): number {
        return this.env.PORT;
    }

    public static get DB_CONFIG(): IDbConfig{
        return {
            host: this.env.DB_HOST,
            port: this.env.DB_PORT,
            username: this.env.DB_USER,
            password: this.env.DB_PASS.toString(),
            database: this.env.DB_NAME,
            synchronize: this.env.DB_SYNC,
            logging: this.env.DB_LOG,
            entities: [this.env.DB_ENTITIES],
        }
    }
}