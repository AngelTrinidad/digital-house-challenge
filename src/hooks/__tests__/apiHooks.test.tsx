import {renderHook, waitFor} from '@testing-library/react-native';

import {useGetProductDetail} from '../api/useGetProductDetail';
import {useGetProducts} from '../api/useGetProducts';

import {QueryClientProvider} from '~config/queryClient';

describe('Api Custom Hooks', () => {
  test('should get product list', async () => {
    const {result} = renderHook(() => useGetProducts(), {
      wrapper: QueryClientProvider,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true), {
      timeout: 2000,
    });

    // Data should be defined
    expect(result.current.data).toBeDefined();
  });

  test('should get product detail by id', async () => {
    const {result} = renderHook(() => useGetProductDetail('1'), {
      wrapper: QueryClientProvider,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true), {
      timeout: 2000,
    });

    // Data should be defined
    expect(result.current.data).toBeDefined();
  });
});
