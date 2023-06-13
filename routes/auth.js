import { Router } from 'express';
import { check } from 'express-validator';
import { login, googleSignin } from '../controllers/auth.js';
import { validarCampos } from '../middlewares/validar-campos.js';

const routers = Router();

routers.post('/login',[
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
], login );

routers.post('/google',[
    check('id_token', 'El id_token es necesario').not().isEmpty(),
    validarCampos
], googleSignin );

export { routers }