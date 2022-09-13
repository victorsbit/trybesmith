import { Request, Response } from 'express';
import productsService from '../services/products.service';

const create = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, amount } = req.body;

    const newProduct = await productsService.create(name, amount);

    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: 'an error ocurred ' });
  }
};

export default { create };
