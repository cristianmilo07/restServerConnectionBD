import { response } from 'express';

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get API- controlador'
    });
}



export { usuariosGet }