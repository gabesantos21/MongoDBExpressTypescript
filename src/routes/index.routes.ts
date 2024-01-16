import { Router } from 'express';
// Routes
import { userRouter } from './user.route';
// Middleware
import { handleError } from '../middleware/error-handler.middleware';

const routes = Router();

routes.use('/users', userRouter);
routes.use(handleError);
export default routes;
