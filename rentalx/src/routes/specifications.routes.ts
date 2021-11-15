import { Router } from 'express';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const speficicationsRoutes = Router();

speficicationsRoutes.use(ensureAuthenticated);
speficicationsRoutes.post('/', new CreateSpecificationController().handle);

export { speficicationsRoutes };
