import { Router } from 'express';
import { buscar } from '../controllers/buscar.js';

const routersBuscar = Router();


//Obtener todas las categorias - publico
routersBuscar.get('/:coleccion/:termino', buscar );

export { routersBuscar }