import { Router } from 'express';

const router = Router();


router.get('/', (req, res) => {
    const { q, nombre = 'no name', apikey, page = 1, limit} = req.query

    res.json({
        msg: 'get API',
        q,
        nombre,
        apikey,
        page,
        limit
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params
    res.json({
        msg: 'get API',
        id
    });
});

router.post('/', (req, res) => {
    const {nombre, edad} = req.body
    res.json({
        msg: 'post API - usuarioPost',
        nombre,
        edad
    });
});

router.delete('/', (req, res) => {
    res.json({
        msg: 'get API'
    });
});

router.patch('/', (req, res) => {
    res.json({
        msg: 'get API'
    });
});

export { router }