import { Request, Response } from 'express';
import generateToken from '../helpers/generateToken';
import usersService from '../services/users.service';

const create = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { body } = req;

    await usersService.create(body);
    const token = generateToken(body.username, body.password);

    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'an error ocurred' });
  }
};

const login = (req: Request, res: Response): Response => {
  try {
    const { body } = req;

    const token = generateToken(body.username, body.password);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'an error ocurred' });
  }
};

export default { create, login };
