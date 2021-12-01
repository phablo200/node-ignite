import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';
import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';

// Não funcionou 05:55
import { AppError } from '@errors/AppError';

let authenticaUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Auththenticate User', () => {

    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authenticaUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    });
    
    it ('should be possible to authenticate a user', async () => {
        const user: ICreateUserDTO = {
            driver_license: '000123',
            email: 'teste01@teste.com',
            password: '12345',
            name: 'User test 01',
        };

        await createUserUseCase.execute(user);

        const result = await authenticaUserUseCase.execute({
            email: user.email,
            password: user.password
        });

        expect(result).toHaveProperty('token');
    });

    it ('should not be possible to authenticate when there is no user', () => {
        expect(async () => {
            await authenticaUserUseCase.execute({
                email: 'false@email.com',
                password: '1234'
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it ('should not be possible to authenticate with incorrect password', () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                driver_license: '9999',
                email: 'user@user.com',
                password: '1234',
                name: 'User Test Error'
            };

            await createUserUseCase.execute(user);

            await authenticaUserUseCase.execute({
                email: user.email,
                password: 'incorrectPassword'
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});