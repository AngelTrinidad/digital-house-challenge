import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';

import Button from '.';

describe('<Button />', () => {
  let component: any;
  const onPressMock = jest.fn();

  beforeEach(() => {
    component = render(<Button onPress={onPressMock} title="Press" />);
  });

  it('should has same snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should call onPress callback on tapped it', () => {
    const button = component.getByText('Press');
    fireEvent(button, 'press');
    expect(onPressMock).toBeCalled();
  });
});
