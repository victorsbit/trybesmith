import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const getAll = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const orders = await ordersService.getAll();

    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ message: 'an error ocurred' });
  }
};

const create = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username } = req.body.user;
    const { productsIds } = req.body;

    const newOrder = await ordersService.create(productsIds, username);

    return res.status(201).json(newOrder);
  } catch (error) {
    return res.status(500).json({ message: 'an error ocurred' });
  }
};

export default { getAll, create };
