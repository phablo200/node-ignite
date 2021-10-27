import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';
class ImportCategoryController {

  handle(request: Request, response: Response) {
    const { file } = request;

    container.resolve(ImportCategoryUseCase).execute(file);

    return response.send();
  }
}

export { ImportCategoryController };
