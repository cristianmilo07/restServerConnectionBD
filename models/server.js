import express from 'express';
import cors from 'cors';
import { router } from '../routes/usuarios.js';

import { dbConnection } from '../database/config.js';
import { routers } from '../routes/auth.js';
 
class Server {
 
    constructor(){
 
        this.app = express();
        this.usuarioPath = '/api/usuarios';
        this.authPath     = '/api/auth';
        
        // Conectar a base de datos
        this.conectarDB();
 
        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }
    
    async conectarDB() {
        await dbConnection();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }
 
    routes(){
        this.app.use(this.authPath, routers);
        this.app.use(this.usuarioPath, router);
    }
 
    listener(){
        this.app.listen(8080)
    }
}
 
export { Server }