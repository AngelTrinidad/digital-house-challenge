import {useGetProducts} from '.';

import {MockApiModuleUrl, mockApiOnGet, setupMockInterceptor} from '~api';
import {QueryClientProvider} from '~config/queryClient';
import {renderHook, waitFor} from '~helpers/testing';
import {product} from '~mocks';

describe('Api Custom Hooks', () => {
  beforeAll(() => {
    const interceptor = setupMockInterceptor();

    mockApiOnGet(interceptor, `${MockApiModuleUrl.Products}`).reply(200, [
      product,
    ]);
  });

  it('should get product list', async () => {
    const {result} = renderHook(() => useGetProducts(), {
      wrapper: QueryClientProvider,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    // Data should be defined
    expect(result.current.data).toBeDefined();
  });
});
