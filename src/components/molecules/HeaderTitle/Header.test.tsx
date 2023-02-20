import React from 'react';

import Header from '.';

import {render} from '~helpers/testing';

describe('<Header />', () => {
  let component: any;

  beforeEach(() => {
    component = render(<Header title="Hello" />);
  });

  it('should renders correctly', () => {
    expect(component).toBeDefined();
  });

  it('should has the same snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
