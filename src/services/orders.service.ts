import IOrder from '../interfaces/orders.interface';
import ordersModel from '../models/orders.model';
import productsModel from '../models/products.model';
import usersModel from '../models/users.model';

const getAll = async (): Promise<IOrder[]> => {
  const orders = await ordersModel.getAll();

  return orders;
};

const create = async (productsIds: number[], username: string) => {
  const { id: userId } = await usersModel.getIdByUsername(username);
  const insertId = await ordersModel.create(Number(userId));

  await Promise
    .all(productsIds.map((productId: number) => productsModel.update(insertId, productId)));

  return { userId, productsIds };
};

export default { getAll, create };
