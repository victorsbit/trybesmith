import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IProduct from '../interfaces/products.interface';

const create = async (name: string, amount: string): Promise<IProduct> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?);',
    [name, amount],
  );

  const { insertId: id } = result;

  return { id, name, amount };
};

export default { create };
