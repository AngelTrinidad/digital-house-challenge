import React from 'react';

import {
  fireEvent,
  render,
  renderHook,
  waitFor,
} from '@testing-library/react-native';

import ProductDetailScreen from '..';

import {QueryClientProvider} from '~config/queryClient';
import {DEFAULT_TIME_OUT} from '~constants/test';
import {formatNumber, getFullDate} from '~helpers';
import {useGetProductDetail} from '~hooks';
import {mockGoBack, product, screenNavigationProps} from '~mocks';

describe('<ProductDetailScreen />', () => {
  const screenProps = {
    ...screenNavigationProps,
    route: {
      params: {
        id: product.id,
      },
    },
  } as any;

  let screen: any;
  let productHook: any;

  beforeEach(() => {
    screen = render(<ProductDetailScreen {...screenProps} />, {
      wrapper: QueryClientProvider,
    });
    productHook = renderHook(() => useGetProductDetail(product.id), {
      wrapper: QueryClientProvider,
    });
  });

  it('should show product detail', async () => {
    const {getByText} = screen;

    await waitFor(() => expect(productHook.result.current.data).toBeDefined(), {
      timeout: DEFAULT_TIME_OUT,
    });

    expect(getByText(product.product)).toBeDefined();

    expect(
      getByText(`Comprado el ${getFullDate(product.createdAt)}`),
    ).toBeDefined();

    expect(getByText(`${formatNumber(product.points)} puntos`)).toBeDefined();
  });

  it('should call "goBack" callback when press button', async () => {
    const {getByText} = screen;

    await waitFor(
      () => {
        expect(productHook.result.current.data).toBeDefined();
      },
      {
        timeout: DEFAULT_TIME_OUT,
      },
    );

    fireEvent(getByText('Aceptar'), 'press');

    expect(mockGoBack).toBeCalled();
  });
});
