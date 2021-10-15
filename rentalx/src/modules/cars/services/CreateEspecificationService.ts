import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  private specificationRepository;

  constructor (specificationRepository: ISpecificationsRepository) {
    this.specificationRepository = specificationRepository;
  }

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

export { CreateSpecificationService };
