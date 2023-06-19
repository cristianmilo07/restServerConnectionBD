import { Router } from 'express';

import { check  } from 'express-validator';

import {  crearProducto,
    obtenerProductos,
    obtenerProducto,
    actualizarProducto, 
    borrarProducto } from '../controllers/productos.js';

import { validarCampos, validarJWT, esAdminRole } from '../middlewares/index.js';
import { existeProductoPorId, existeCategoriaPorId } from '../helpers/index.js';

const routersProducto = Router();

//Crear categoria - privado - cualquier persona con un token válido
 //routersProductos.post('/', (req, res)=> {
 //    res.json('post');
 //})


 //  Obtener todas las categorias - publico
 routersProducto.get('/', obtenerProductos );

// Obtener una categoria por id - publico
routersProducto.get('/:id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( existeProductoPorId ),
    validarCampos,
], obtenerProducto );

// Crear categoria - privado - cualquier persona con un token válido
routersProducto.post('/', [ 
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('categoria','No es un id de Mongo').isMongoId(),
    check('categoria').custom( existeCategoriaPorId ),
    validarCampos
], crearProducto );

// Actualizar - privado - cualquiera con token válido
routersProducto.put('/:id',[
    validarJWT,
    // check('categoria','No es un id de Mongo').isMongoId(),
    check('id').custom( existeProductoPorId ),
    validarCampos
], actualizarProducto );

// Borrar una categoria - Admin
routersProducto.delete('/:id',[
    validarJWT,
    esAdminRole,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( existeProductoPorId ),
    validarCampos,
], borrarProducto);


export { routersProducto }
