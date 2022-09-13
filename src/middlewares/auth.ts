import { NextFunction, Request, Response } from 'express';
import usersModel from '../models/users.model';

const validateFields = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  if (!username) return res.status(400).json({ message: '"username" is required' });
  if (!password) return res.status(400).json({ message: '"password" is required' });

  next();
};

const validateUser = async (req: Request, res: Response, next: NextFunction) => {
  const allUsers = await usersModel.getAll();

  const { username, password } = req.body;
  
  const doesThisUserExist = allUsers.find((user) => user.username === username);

  if (!doesThisUserExist) return res.status(401).json({ message: 'Username or password invalid' });

  if (doesThisUserExist.password !== password) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  next();
};

export default { validateFields, validateUser };
