import { Router } from 'express';
import productsController from '../controllers/products.controller';
import usersController from '../controllers/users.controller';
import ordersController from '../controllers/orders.controller';
import userAuth from '../middlewares/user.authenticate';

const productsRouter = Router();
const usersRouter = Router();
const ordersRouter = Router();
const loginRouter = Router();

productsRouter.post('/products', productsController.create);
productsRouter.get('/products', productsController.getAll);

usersRouter.post('/users', usersController.create);
loginRouter.post('/login', userAuth.validateFields, userAuth.validateUser, usersController.login);

ordersRouter.get('/orders', ordersController.getAll);

export default { productsRouter, usersRouter, ordersRouter, loginRouter };
