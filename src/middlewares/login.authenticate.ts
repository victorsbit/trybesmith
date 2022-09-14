import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
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

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization: token } = req.headers;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    const user = verify(token, 'password');
    req.body.user = user;
  } catch (e) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  next();
};

export default { validateFields, validateUser, validateToken };
