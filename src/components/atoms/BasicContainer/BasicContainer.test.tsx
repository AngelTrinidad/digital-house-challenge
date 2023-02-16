import React from 'react';
import {Text} from 'react-native';

import {render} from '~helpers/testing';

import BasicContainer from '.';

describe('<BasicContainer />', () => {
  let component: any;

  beforeEach(() => {
    component = render(
      <BasicContainer>
        <Text>Hello</Text>
      </BasicContainer>,
    );
  });

  it('renders correctly', () => {
    expect(component).toBeDefined();
  });

  it('has same snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
