import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productsRouter = Router();

productsRouter.post('/products', productsController.create);
productsRouter.get('/products', productsController.getAll);

export default productsRouter;
