import { Application } from 'express';
import IBootstrap from './bootstrap.interface';
import { AppService } from '../core/services/app.service';


export default class ServerBootstrap implements IBootstrap{
    
    constructor(private readonly app: Application){}
    
    initialize(){
        return new Promise((resolve, reject) => {
            this.app.listen(AppService.PORT, () => {
                resolve(`Servidor en ejecución en http://localhost:${AppService.PORT}`);
                console.log(`Servidor en ejecución en http://localhost:${AppService.PORT}`);
            });
        });
    }

    close(){
        process.exit(1)
    }
}