import { Router } from 'express';
import { check } from 'express-validator';

import { validarCampos, validarJWT } from '../middlewares/index.js';
import { crearCategoria } from '../controllers/categorias.js';

const routersCategory = Router();

/** 
 * {{url}}/api/categorias
 */

//Obtener todas las categorias - publico
routersCategory.get('/', (req, res) => {
    res.json('get')
} );

//Obtener una  categoria por id - publico
routersCategory.get('/:id', (req, res) => {
    res.json('get - id')
} );

//Crear categoria - privado - cualquier persona con un token válido
routersCategory.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
    ], crearCategoria
 );

//Actualizado - privado - cualquier con un token válido
routersCategory.put('/:id', (req, res) => {
    res.json('put')
} );

//Delete - Admin
routersCategory.delete('/:id', (req, res) => {
    res.json('Delete pero con put')
} );

export { routersCategory }