import { Router } from 'express';
// Controller
import { UserController } from '../controller/user.controller';

const router = Router();

router.get('/', UserController.getAll);
router.get('/:id', UserController.getOneById);
router.post('/', UserController.save);
router.patch('/:id', UserController.edit);
router.delete('/:id', UserController.delete);

export const userRouter = router;
