import React from 'react';
import {Text} from 'react-native';

import Card from '.';

import {render} from '~helpers/testing';

describe('<Card />', () => {
  let component: any;

  beforeEach(() => {
    component = render(
      <Card>
        <Text>Hello</Text>
      </Card>,
    );
  });

  it('should render correctly', () => {
    expect(component).toBeDefined();
  });

  it('should has same snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
