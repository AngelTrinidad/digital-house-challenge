import {useQuery} from 'react-query';

import {getProduct} from '~api';
import {Product, Query} from '~interfaces';

interface UseGetProductDetail {
  data: Product | undefined;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isRefetching: boolean;
  refetch: () => void;
}

export const useGetProductDetail = (id: string): UseGetProductDetail => {
  const {data, isLoading, isError, isSuccess, refetch, isRefetching} = useQuery(
    [Query.GetProduct, id],
    () => getProduct(id),
  );

  return {
    data,
    isError,
    isLoading,
    isSuccess,
    isRefetching,
    refetch,
  };
};
