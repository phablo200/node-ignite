import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';
class CreateSpecificationController {
  handle(request: Request, response: Response) {
    const { name, description } = request.body;
    
    const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase);
    
    createSpecificationUseCase.execute({ name, description });

    return response.send(201).json();
  }
};

export { CreateSpecificationController };
