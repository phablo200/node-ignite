import { Request, Response } from 'express';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';
import { container } from 'tsyringe';

class AuthenticateUserController {
    async handle (request: Request, response: Response): Promise<Response> {
        const { password, email } = request.body;
        const token = await container.resolve(AuthenticateUserUseCase).execute({ email, password });

        return response.json(token);
    }
};

export { AuthenticateUserController };