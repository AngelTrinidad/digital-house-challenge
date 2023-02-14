import React from 'react';

import {
  fireEvent,
  render,
  renderHook,
  waitFor,
} from '@testing-library/react-native';

import ProductListScreen from '..';

import {QueryClientProvider} from '~config/queryClient';
import {DEFAULT_TIME_OUT} from '~constants/test';
import {formatNumber, getCurrentPoints} from '~helpers';
import {useGetProducts} from '~hooks';
import {
  mockNavigate,
  product,
  redemptionProduct,
  screenNavigationProps,
} from '~mocks';

describe('<ProductListScreen />', () => {
  let screen: any;
  let productsHook: any;

  beforeEach(() => {
    screen = render(<ProductListScreen {...screenNavigationProps} />, {
      wrapper: QueryClientProvider,
    });
    productsHook = renderHook(() => useGetProducts(), {
      wrapper: QueryClientProvider,
    });
  });

  it('should show current points', async () => {
    const {getByTestId} = screen;

    await waitFor(
      () => expect(productsHook.result.current.data).toBeDefined(),
      {
        timeout: DEFAULT_TIME_OUT,
      },
    );

    expect(getByTestId('current-points').children[0]).toBe(
      formatNumber(getCurrentPoints([product, redemptionProduct])),
    );
  });

  it('should show the product list', async () => {
    const {getByText} = screen;

    await waitFor(
      () => {
        expect(productsHook.result.current.data).toBeDefined();
      },
      {
        timeout: DEFAULT_TIME_OUT,
      },
    );

    expect(getByText(product.product)).toBeDefined();

    expect(getByText(redemptionProduct.product)).toBeDefined();

    expect(getByText('Ganados')).toBeDefined();

    expect(getByText('Canjeados')).toBeDefined();
  });

  it('should filter products by "Earned"', async () => {
    const {getByText, queryByText} = screen;

    await waitFor(
      () => expect(productsHook.result.current.data).toBeDefined(),
      {
        timeout: DEFAULT_TIME_OUT,
      },
    );

    fireEvent(getByText('Ganados'), 'press');

    await waitFor(() => expect(getByText('Todos')).toBeDefined(), {
      timeout: DEFAULT_TIME_OUT,
    });

    expect(getByText(product.product)).toBeDefined();

    expect(queryByText(redemptionProduct.product)).toBeNull();

    fireEvent(getByText('Todos'), 'press');

    // Filter by Redeemed
    fireEvent(getByText('Canjeados'), 'press');
    await waitFor(() => expect(getByText('Todos')).toBeDefined(), {
      timeout: DEFAULT_TIME_OUT,
    });
    expect(queryByText(product.product)).toBeNull();
    expect(getByText(redemptionProduct.product)).toBeDefined();
  });

  it('should filter products by "Redeemed"', async () => {
    const {getByText, queryByText} = screen;

    await waitFor(
      () => expect(productsHook.result.current.data).toBeDefined(),
      {
        timeout: DEFAULT_TIME_OUT,
      },
    );

    fireEvent(getByText('Canjeados'), 'press');

    await waitFor(() => expect(getByText('Todos')).toBeDefined(), {
      timeout: DEFAULT_TIME_OUT,
    });

    expect(queryByText(product.product)).toBeNull();

    expect(getByText(redemptionProduct.product)).toBeDefined();
  });

  it('should call "navigate" callback on Product Row pressed', async () => {
    const {getByText} = screen;

    await waitFor(
      () => {
        expect(productsHook.result.current.data).toBeDefined();
      },
      {
        timeout: DEFAULT_TIME_OUT,
      },
    );

    expect(getByText(product.product)).toBeDefined();

    fireEvent(getByText(product.product), 'press');

    expect(mockNavigate).toBeCalled();
  });
});
