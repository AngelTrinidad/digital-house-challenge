import {useGetProductDetail} from '.';

import {MockApiModuleUrl, mockApiOnGet, setupMockInterceptor} from '~api';
import {QueryClientProvider} from '~config/queryClient';
import {renderHook, waitFor} from '~helpers/testing';
import {product} from '~mocks';

describe('useGetProductDetail', () => {
  beforeAll(() => {
    const interceptor = setupMockInterceptor();

    mockApiOnGet(
      interceptor,
      `${MockApiModuleUrl.Products}/${product.id}`,
    ).reply(200, product);
  });

  it('should get product detail by id', async () => {
    const {result} = renderHook(() => useGetProductDetail('1'), {
      wrapper: QueryClientProvider,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    // Data should be defined
    expect(result.current.data).toBeDefined();
  });
});
