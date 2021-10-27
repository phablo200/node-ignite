import { Router } from 'express';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const speficicationsRoutes = Router();
speficicationsRoutes.post('/', new CreateSpecificationController().handle);

export { speficicationsRoutes };
