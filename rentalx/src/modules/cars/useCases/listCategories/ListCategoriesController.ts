import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';
import { container } from 'tsyringe';

class ListCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const all = await container.resolve(ListCategoriesUseCase).execute();
    return response.json(all);
  }
}

export { ListCategoryController };
