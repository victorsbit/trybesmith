import { Router } from 'express';
import productsController from '../controllers/products.controller';
import usersController from '../controllers/users.controller';
import ordersController from '../controllers/orders.controller';

const productsRouter = Router();
const usersRouter = Router();
const ordersRouter = Router();

productsRouter.post('/products', productsController.create);
productsRouter.get('/products', productsController.getAll);

usersRouter.post('/users', usersController.create);

ordersRouter.get('/orders', ordersController.getAll);

export default { productsRouter, usersRouter, ordersRouter };
