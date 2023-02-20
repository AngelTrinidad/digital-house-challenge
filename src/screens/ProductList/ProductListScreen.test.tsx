import React from 'react';

import ProductListScreen from '.';

import {MockApiModuleUrl, mockApiOnGet, setupMockInterceptor} from '~api';
import {act, fireEvent, render, screen, waitFor} from '~helpers/testing';
import {
  mockNavigate,
  product,
  redemptionProduct,
  screenNavigationProps,
} from '~mocks';

describe('<ProductListScreen />', () => {
  beforeAll(() => {
    const interceptor = setupMockInterceptor();

    mockApiOnGet(interceptor, MockApiModuleUrl.Products).reply(200, [
      product,
      redemptionProduct,
    ]);
  });

  it('should show current points', async () => {
    render(<ProductListScreen {...screenNavigationProps} />);

    await waitFor(() =>
      expect(screen.getByText(product.product)).toBeDefined(),
    );

    expect(screen.getByTestId('current-points').children[0]).toBe('5,000');
  });

  it('should show the product list', async () => {
    render(<ProductListScreen {...screenNavigationProps} />);

    await waitFor(() =>
      expect(screen.getByText(product.product)).toBeDefined(),
    );

    expect(screen.getByText(redemptionProduct.product)).toBeDefined();

    expect(screen.getByText('Ganados')).toBeDefined();

    expect(screen.getByText('Canjeados')).toBeDefined();
  });

  it('should filter products by "Earned"', async () => {
    render(<ProductListScreen {...screenNavigationProps} />);

    await waitFor(() =>
      expect(screen.getByText(product.product)).toBeDefined(),
    );

    act(() => {
      fireEvent.press(screen.getByText('Ganados'));
    });

    await waitFor(() => expect(screen.getByText('Todos')).toBeDefined());

    expect(screen.getByText(product.product)).toBeDefined();

    expect(screen.queryByText(redemptionProduct.product)).toBeNull();

    act(() => {
      fireEvent.press(screen.getByText('Todos'));
    });

    // Filter by Redeemed
    act(() => {
      fireEvent(screen.getByText('Canjeados'), 'press');
    });

    await waitFor(() => expect(screen.getByText('Todos')).toBeDefined());

    expect(screen.queryByText(product.product)).toBeNull();

    expect(screen.getByText(redemptionProduct.product)).toBeDefined();
  });

  it('should filter products by "Redeemed"', async () => {
    render(<ProductListScreen {...screenNavigationProps} />);

    await waitFor(() =>
      expect(screen.getByText(product.product)).toBeDefined(),
    );

    act(() => {
      fireEvent.press(screen.getByText('Canjeados'));
    });

    await waitFor(() => expect(screen.getByText('Todos')).toBeDefined());

    expect(screen.queryByText(product.product)).toBeNull();

    expect(screen.getByText(redemptionProduct.product)).toBeDefined();
  });

  it('should call "navigate" callback on Product Row pressed', async () => {
    render(<ProductListScreen {...screenNavigationProps} />);

    await waitFor(() =>
      expect(screen.getByText(product.product)).toBeDefined(),
    );

    expect(screen.getByText(product.product)).toBeDefined();

    act(() => {
      fireEvent.press(screen.getByText(product.product));
    });

    expect(mockNavigate).toBeCalled();
  });
});
