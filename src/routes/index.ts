import { Router } from 'express';
import productsController from '../controllers/products.controller';
import usersController from '../controllers/users.controller';

const productsRouter = Router();
const userRouter = Router();

productsRouter.post('/products', productsController.create);
productsRouter.get('/products', productsController.getAll);

userRouter.post('/users', usersController.create);

export default { productsRouter, userRouter };
