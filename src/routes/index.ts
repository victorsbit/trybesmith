import { Router } from 'express';
import productsController from '../controllers/products.controller';
import usersController from '../controllers/users.controller';
import ordersController from '../controllers/orders.controller';
import loginAuthenticate from '../middlewares/login.authenticate';
import productAuthenticate from '../middlewares/product.authenticate';
import userAuthenticate from '../middlewares/user.authenticate';
import orderAuthenticate from '../middlewares/order.authenticate';

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

usersRouter.post(
  '/users',
  userAuthenticate.validateUsernameField,
  userAuthenticate.validateClasseField,
  userAuthenticate.validateLevelField,
  userAuthenticate.validatePasswordField,
  usersController.create,
);
loginRouter.post(
  '/login',
  loginAuthenticate.validateFields,
  loginAuthenticate.validateUser,
  usersController.login,
);

ordersRouter.get('/orders', ordersController.getAll);
ordersRouter.post(
  '/orders',
  loginAuthenticate.validateToken,
  orderAuthenticate.validateProductsIdsField,
  ordersController.create,
);

export default { productsRouter, usersRouter, ordersRouter, loginRouter };
