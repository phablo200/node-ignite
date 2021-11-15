import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import uploadConfig from '../config/upload';

const accountsRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

accountsRoutes.post('/', new CreateUserController().handle);
accountsRoutes.patch('/avatar', ensureAuthenticated, uploadAvatar.single('avatar'), new UpdateUserAvatarController().handle);

export { accountsRoutes };