import IProduct from '../interfaces/products.interface';
import productsModel from '../models/products.model';

const create = async (name: string, amount: string): Promise<IProduct> => {
  const newProduct = await productsModel.create(name, amount);
  return newProduct;
};

export default { create };
