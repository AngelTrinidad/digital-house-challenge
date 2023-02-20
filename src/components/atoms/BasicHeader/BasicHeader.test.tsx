import React from 'react';
import {Text} from 'react-native';

import BasicHeader from '.';

import {render} from '~helpers/testing';

describe('<BasicHeader />', () => {
  let component: any;

  beforeEach(() => {
    component = render(
      <BasicHeader>
        <Text>Hello</Text>
      </BasicHeader>,
    );
  });

  it('should render correctly', () => {
    expect(component).toBeDefined();
  });

  it('should has same snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
