import {MockApiModuleUrl} from '../types';

import axios from '~api/axios';
import {Product} from '~interfaces';

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(`/${MockApiModuleUrl.Products}`);
  return response.data;
};
