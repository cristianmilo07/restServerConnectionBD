import { Router } from 'express';
import { check } from 'express-validator';

import { 
        usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch
 } from '../controllers/usuarios.js';
import { validarCampos } from '../middlewares/validar-campos.js';
import { Role } from '../models/role.js';

const router = Router();


router.get('/', usuariosGet );

router.put('/:id', usuariosPut );

router.post('/', [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),
        check('correo', 'El correo no es válido').isEmail(),
        //check('correo').custom( emailExiste ),
        // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
        //check('rol').custom( esRoleValid ), 

        check('rol').custom( async (rol = '') => {
                const existeRol = await Role.findOne({ rol });
                if(!existeRol) {
                        throw new Error ( `El rol ${ rol } no está registrado en la BD`)
                }
        }),
        validarCampos
    ], usuariosPost );

router.delete('/', usuariosDelete );

router.patch('/', usuariosPatch );

export { router }