import {useQuery} from 'react-query';

import {getProducts} from '~api';
import {Product, Query} from '~interfaces';

interface UseGetProducts {
  data: Product[] | undefined;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isRefetching: boolean;
  refetch: () => void;
}

export const useGetProducts = (): UseGetProducts => {
  const {data, isLoading, isError, refetch, isRefetching, isSuccess} = useQuery(
    Query.GetProducts,
    getProducts,
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
