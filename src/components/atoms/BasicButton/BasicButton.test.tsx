import React from 'react';
import {Text} from 'react-native';

import BasicButton from '.';

import {fireEvent, render} from '~helpers/testing';

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
