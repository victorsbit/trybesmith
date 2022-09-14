import { ResultSetHeader } from 'mysql2';
import IOrder from '../interfaces/orders.interface';
import connection from './connection';

const getAll = async (): Promise<IOrder[]> => {
  const [result] = await connection.execute(
    `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id)
    AS productsIds
    FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p
    ON p.orderId = o.id
    GROUP BY o.id
    ORDER BY o.userId;`,
  );
    
  return result as IOrder[];
};

const create = async (userId: number): Promise<number> => {
  const [result] = await connection
    .execute<ResultSetHeader>('INSERT INTO Trybesmith.Orders (userId) VALUES (?);', [userId]);
  const { insertId } = result;

  return insertId;
};

export default { getAll, create };
