import {useMemo} from 'react';

import {useQuery} from 'react-query';

import {getProducts} from '~api';
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
    Query.GetProducts,
    () => getProducts(),
  );

  const product = useMemo((): Product | undefined => {
    if (!data) {
      return undefined;
    }
    const productFiltered = data.find(e => e.id === id);

    return productFiltered ? productFiltered : undefined;
  }, [data, id]);

  return {
    data: product,
    isError,
    isLoading,
    isSuccess,
    isRefetching,
    refetch,
  };
};
