import { Router } from 'express';
import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController';

const authenticateRoutes = Router();

const controller = new AuthenticateUserController();

authenticateRoutes.post('/sessions', controller.handle);

export { 
    authenticateRoutes
};