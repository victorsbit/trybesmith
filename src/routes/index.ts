import { Router } from 'express';
import productsController from '../controllers/products.controller';
import usersController from '../controllers/users.controller';
import ordersController from '../controllers/orders.controller';
import userAuthenticate from '../middlewares/user.authenticate';
import productAuthenticate from '../middlewares/product.authenticate';

const productsRouter = Router();
const usersRouter = Router();
const ordersRouter = Router();
const loginRouter = Router();

productsRouter.post(
  '/products',
  productAuthenticate.validateNameField,
  productAuthenticate.validateAmountField,
  productsController.create,
);
productsRouter.get('/products', productsController.getAll);

usersRouter.post('/users', usersController.create);
loginRouter.post(
  '/login',
  userAuthenticate.validateFields,
  userAuthenticate.validateUser,
  usersController.login,
);

ordersRouter.get('/orders', ordersController.getAll);

export default { productsRouter, usersRouter, ordersRouter, loginRouter };
