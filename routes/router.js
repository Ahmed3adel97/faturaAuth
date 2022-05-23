import express from 'express';
import registerController from '../controller/register.js';
import loginController from '../controller/login.js';

const router =  express.Router();

router.post('/register', registerController);
router.post('/login', loginController);


export default router;
