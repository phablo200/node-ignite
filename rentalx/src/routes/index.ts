import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { speficicationsRoutes } from './specifications.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', speficicationsRoutes);

export { router };
