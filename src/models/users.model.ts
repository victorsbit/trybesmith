import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IUser from '../interfaces/users.interface';

const create = async (newUser: IUser): Promise<void> => {
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?);',
    [newUser.username, newUser.classe, newUser.level, newUser.password],
  );
};

const getAll = async (): Promise<IUser[]> => {
  const [allUsers] = await connection.execute('SELECT * FROM Trybesmith.Users');

  return allUsers as IUser[];
};

export default { create, getAll };
