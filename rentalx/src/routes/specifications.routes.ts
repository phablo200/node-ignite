import { Router } from 'express';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const speficicationsRoutes = Router();

speficicationsRoutes.post('/', (request, response) => createSpecificationController.handle(request, response));

export { speficicationsRoutes };
