import React from 'react';
import {Text} from 'react-native';

import {render} from '@testing-library/react-native';

import AsyncContent from '.';

describe('<AsyncContent />', () => {
  let component: any;

  beforeEach(() => {
    component = render(
      <AsyncContent
        isLoading={true}
        isError={false}
        loadingTestID="loading-content"
        errorTestID="error-content">
        <Text>Hello</Text>
      </AsyncContent>,
    );
  });

  it('should renders correctly', () => {
    expect(component).toBeDefined();
  });

  it('should render correct feedback by props', () => {
    // Loading feedback
    expect(component.getByTestId('loading-content')).toBeDefined();

    // Error feedback
    component.rerender(
      <AsyncContent
        isLoading={false}
        isError={true}
        loadingTestID="loading-content"
        errorTestID="error-content">
        <Text>Hello</Text>
      </AsyncContent>,
    );
    expect(component.getByTestId('error-content')).toBeDefined();

    // Default content
    component.rerender(
      <AsyncContent isLoading={false} isError={false}>
        <Text>Hello</Text>
      </AsyncContent>,
    );
    expect(component.getByText('Hello')).toBeDefined();
  });
});
