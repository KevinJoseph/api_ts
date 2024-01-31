import express, {Request, Response} from 'express';
import routerUsers from './modules/users/presentation/user.route';

class App {
    app: express.Application;

    constructor(){
        this.app = express();
        this.middlewares();
        this.mountRoutes();
    }

    middlewares():void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }
    mountRoutes(): void{
        this.app.use('/users', routerUsers)
    }
}

export default new App().app;