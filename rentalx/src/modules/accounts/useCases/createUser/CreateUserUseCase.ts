import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { hash } from 'bcrypt';


@injectable()
class CreateUserUseCase {
    public constructor(
        @inject('UsersRepository')
        private userRepository: IUsersRepository
    ) {}

    async execute (formData: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.userRepository.findByEmail(formData.email);
        
        if (userAlreadyExists) {
           throw new Error('User already exists'); 
        }

        const passwordHash = await hash(formData.password, 8);
        const user = {
            ...formData,
            password: passwordHash
        };
        
        await this.userRepository.create(user);
    }
};

export { CreateUserUseCase };