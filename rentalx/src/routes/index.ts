import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { speficicationsRoutes } from './specifications.routes';
import { accountsRoutes } from './accounts.routes';
import { authenticateRoutes } from './authenticate.routes';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', speficicationsRoutes);
router.use('/accounts', accountsRoutes);
router.use(authenticateRoutes);

export { router };
