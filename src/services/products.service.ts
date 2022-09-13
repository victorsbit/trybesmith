import IProduct from '../interfaces/products.interface';
import productsModel from '../models/products.model';

const create = async (name: string, amount: string): Promise<IProduct> => {
  const newProduct = await productsModel.create(name, amount);
  return newProduct;
};

const getAll = async (): Promise<IProduct[]> => {
  const products = await productsModel.getAll();
  return products;
};

export default { create, getAll };
