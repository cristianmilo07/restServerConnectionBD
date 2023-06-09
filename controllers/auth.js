import { response, request  } from 'express';

const login = async(req, res = response) => {
    res.json({
        msg:'login ok'
    })
}

export { 
    login
 }