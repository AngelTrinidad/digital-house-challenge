import axios from '../axios';
import {MockApiModuleUrl} from '../types';

import {Product} from '~interfaces';

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(`/${MockApiModuleUrl.Products}`);
  return response.data;
};

export const getProduct = async (id: string): Promise<Product> => {
  const response = await axios.get<Product>(
    `/${MockApiModuleUrl.Products}/${id}`,
  );
  return response.data;
};
