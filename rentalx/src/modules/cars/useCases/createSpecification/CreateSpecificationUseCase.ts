import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
    
  private specificationRepository;
  constructor(
    @inject("SpecificationsRepository")
    specificationRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExist = this.specificationRepository.findByName(name);

    if (specificationAlreadyExist) {
      throw new Error('Specification already exists !');
    }

    this.specificationRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
