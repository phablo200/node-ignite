import { Request, Response } from 'express';

import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  public constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  handle(request: Request, response: Response) {
    const { file } = request;
    this.importCategoryUseCase.execute(file);
    return response.send();
  }
}

export { ImportCategoryController };
