import express from 'express';
import router from './routes';

const app = express();

app.use(express.json());

app.use(router.productsRouter);
app.use(router.usersRouter);
app.use(router.ordersRouter);
app.use(router.loginRouter);

export default app;
