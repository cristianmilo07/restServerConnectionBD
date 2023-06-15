import { Router } from 'express';
import { check } from 'express-validator';

import { esAdminRole, validarCampos, validarJWT } from '../middlewares/index.js';
import { crearCategoria, categoriaGet, obtenerCategoria, ActualizarCategoria, borrarCategoria } from '../controllers/categorias.js';
import { existeCategoriaPorId } from '../helpers/index.js';

const routersCategory = Router();

/** 
 * {{url}}/api/categorias
 */

//Obtener todas las categorias - publico
routersCategory.get('/', categoriaGet );

//Obtener una  categoria por id - publico
routersCategory.get('/:id', [
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( existeCategoriaPorId ),
    validarCampos,
], obtenerCategoria );

//Crear categoria - privado - cualquier persona con un token válido
routersCategory.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
    ], crearCategoria
 );

//Actualizado - privado - cualquier con un token válido
routersCategory.put('/:id',[
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('id').custom( existeCategoriaPorId ),
    validarCampos
] ,ActualizarCategoria );

//Delete - Admin
routersCategory.delete('/:id', [
    validarJWT,
    esAdminRole,
    check('id', 'No es un id de Mongo válida').isMongoId(),
    check('id').custom( existeCategoriaPorId ),
    validarCampos
] , borrarCategoria
 );

export { routersCategory }