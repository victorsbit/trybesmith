import IOrder from '../interfaces/orders.interface';
import ordersModel from '../models/orders.model';

const getAll = async (): Promise<IOrder[]> => {
  const orders = await ordersModel.getAll();

  return orders;
};

export default { getAll };
