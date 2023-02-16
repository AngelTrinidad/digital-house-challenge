import React from 'react';

import ProductDetailScreen from '.';

import {MockApiModuleUrl, mockApiOnGet, setupMockInterceptor} from '~api';
import {formatNumber, getFullDate} from '~helpers';
import {act, fireEvent, render, screen, waitFor} from '~helpers/testing';
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

  beforeAll(() => {
    const interceptor = setupMockInterceptor();

    mockApiOnGet(
      interceptor,
      `${MockApiModuleUrl.Products}/${product.id}`,
    ).reply(200, product);
  });

  it('should show product detail', async () => {
    render(<ProductDetailScreen {...screenProps} />);

    await waitFor(() =>
      expect(screen.getByText(product.product)).toBeDefined(),
    );

    expect(
      screen.getByText(`Comprado el ${getFullDate(product.createdAt)}`),
    ).toBeDefined();

    expect(
      screen.getByText(`${formatNumber(product.points)} puntos`),
    ).toBeDefined();
  });

  it('should call "goBack" callback when press button', async () => {
    render(<ProductDetailScreen {...screenProps} />);

    await waitFor(() =>
      expect(screen.getByText(product.product)).toBeDefined(),
    );

    act(() => {
      fireEvent.press(screen.getByText('Aceptar'));
    });

    expect(mockGoBack).toBeCalled();
  });
});
