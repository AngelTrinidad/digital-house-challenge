import {renderHook, waitFor} from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';

import {useGetProductDetail} from '../api/useGetProductDetail';
import {useGetProducts} from '../api/useGetProducts';

import {MockApiModuleUrl} from '~api';
import axiosInstance, {API_VERSION, BASE_URL} from '~api/axios';
import {QueryClientProvider} from '~config/queryClient';
import {product} from '~mocks';

describe('Api Custom Hooks', () => {
  let mockInstance: any;

  beforeAll(() => {
    mockInstance = new MockAdapter(axiosInstance);
    mockInstance
      .onGet(`${BASE_URL}/${API_VERSION}/${MockApiModuleUrl.Products}`)
      .reply(200, [product]);
  });

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
