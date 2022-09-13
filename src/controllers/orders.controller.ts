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

export default { getAll };
