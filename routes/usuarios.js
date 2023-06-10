import { Router } from 'express';
import { check } from 'express-validator';

import { esAdminRole, tieneRole, validarCampos, validarJWT } from '../middlewares/index.js'; 


import { emailExiste, esRoleValido, existeUsuarioPorId } from '../helpers/db-validators.js';

import { 
        usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch
 } from '../controllers/usuarios.js';


const router = Router();


router.get('/', usuariosGet );

router.put('/:id', [
        check('id', 'No es un ID válido').isMongoId(),
        check('id').custom( existeUsuarioPorId ),
        check('rol').custom( esRoleValido ), 
        validarCampos
    ], usuariosPut );

router.post('/', [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),
        check('correo', 'El correo no es válido').isEmail(),
        check('correo').custom( emailExiste ),
        // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
        //check('rol').custom( esRoleValid ), 

        check('rol').custom( esRoleValido),
        validarCampos
    ], usuariosPost );

router.delete('/:id',[
    validarJWT,
    //esAdminRole, función para que solo permita adminRole
    tieneRole('ADMIN_ROLE', 'USER_ROLE'),
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    validarCampos
    ], usuariosDelete );

router.patch('/', usuariosPatch );

export { router }