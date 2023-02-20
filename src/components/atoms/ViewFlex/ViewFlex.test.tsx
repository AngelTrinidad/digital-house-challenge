import React from 'react';
import {Text} from 'react-native';

import ViewFlex from '.';

import {render} from '~helpers/testing';

describe('<ViewFlex />', () => {
  let component: any;

  beforeEach(() => {
    component = render(
      <ViewFlex>
        <Text>Hello</Text>
      </ViewFlex>,
    );
  });

  it('should render correctly', () => {
    expect(component).toBeDefined();
  });

  it('should has same snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
