import { Request, Response } from 'express';

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  public constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(request: Request, response: Response) {
    const { name, description } = request.body;
    this.createSpecificationUseCase.execute({ name, description });
    return response.send(201).json();
  }
}

export { CreateSpecificationController };
