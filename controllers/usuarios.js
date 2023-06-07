import { response, request  } from 'express';
import  bcryptjs from 'bcryptjs';

import { Usuario } from '../models/usuario.js';


const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page, 
        limit
    });
}

const usuariosPost = async (req, res = response) => {


    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});

     // Encriptar la contraseña
     const salt = bcryptjs.genSaltSync();
     usuario.password = bcryptjs.hashSync( password, salt );
 

    await usuario.save();
    res.json({
        msg: 'post API - usuariosPost',
        usuario
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - usuariosPut',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
}




export { 
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
 }