import { Router } from 'express';
import { check } from 'express-validator';
import { login } from '../controllers/auth.js';

const routers = Router();

routers.post('/login', login );

export { routers }