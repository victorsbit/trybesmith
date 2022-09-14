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

const getAll = async (): Promise<IProduct[]> => {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.Products;');

  return result as Array<IProduct>;
};

const update = async (orderId: number, productId: number): Promise<void> => {
  await connection.execute(`UPDATE Trybesmith.Products
    SET orderId = ? WHERE id = ?`, [orderId, productId]);
};

export default { create, getAll, update };
