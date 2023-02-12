import React from 'react';
import {Text} from 'react-native';

import {fireEvent, render} from '@testing-library/react-native';

import BasicButton from '.';

describe('<BasicButton />', () => {
  let component: any;
  const onPressMock = jest.fn();

  beforeEach(() => {
    component = render(
      <BasicButton onPress={onPressMock}>
        <Text>Press</Text>
      </BasicButton>,
    );
  });

  it('renders correctly', () => {
    expect(component).toBeDefined();
  });

  it('has same snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('call onPress callback on tapped it', () => {
    const button = component.getByText('Press');
    fireEvent(button, 'press');
    expect(onPressMock).toBeCalled();
  });
});
