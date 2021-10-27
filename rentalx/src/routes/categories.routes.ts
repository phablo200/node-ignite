import { Router } from 'express';
import multer from 'multer';

import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController';
import { ListCategoryController } from '../modules/cars/useCases/listCategories/ListCategoriesController';
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', new CreateCategoryController().handle);
categoriesRoutes.get('/', new ListCategoryController().handle);
categoriesRoutes.post('/import', upload.single('file'), new ImportCategoryController().handle);

export { categoriesRoutes };
