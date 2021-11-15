import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const formData: ICreateUserDTO = request.body;
        await container.resolve(CreateUserUseCase).execute(formData);

        return response.status(201).send();
    };
};

export { CreateUserController };