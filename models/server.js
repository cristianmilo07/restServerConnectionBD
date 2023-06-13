import express from 'express';
import cors from 'cors';
import { router } from '../routes/usuarios.js';

import { dbConnection } from '../database/config.js';
import { routers } from '../routes/auth.js';
import { routersCategory } from '../routes/categorias.js';
 
class Server {
 
    constructor(){
 
        this.app = express();

        this.paths = {
            auth:       '/api/auth',
            usuario:    '/api/usuarios',
            categorias: '/api/categorias'
        }
        
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
        this.app.use(this.paths.auth, routers);
        this.app.use(this.paths.usuario, router);
        this.app.use(this.paths.categorias, routersCategory);
    }
 
    listener(){
        this.app.listen(8080)
    }
}
 
export { Server }