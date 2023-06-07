import { Router } from 'express';
import { check } from 'express-validator';

import { 
        usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch
 } from '../controllers/usuarios.js';

const router = Router();


router.get('/', usuariosGet );

router.put('/:id', usuariosPut );

router.post('/', [
        //check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        //check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),
        check('correo', 'El correo no es válido').isEmail(),
        // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
    ], usuariosPost );

router.delete('/', usuariosDelete );

router.patch('/', usuariosPatch );

export { router }