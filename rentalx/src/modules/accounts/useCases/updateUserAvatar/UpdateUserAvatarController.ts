import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUserCase';


class UpdateUserAvatarController {

    async handle (request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        

        const avatar_file = request.file.filename;

        await container.resolve(UpdateUserAvatarUseCase).execute({user_id: id, avatar_file});

        return response.status(204).send();
    }
};

export { UpdateUserAvatarController };