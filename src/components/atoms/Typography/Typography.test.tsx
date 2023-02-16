import React from 'react';

import {render} from '~helpers/testing';

import Typography from '.';

describe('<Typography />', () => {
  let component: any;

  beforeEach(() => {
    component = render(<Typography>Hello</Typography>);
  });

  it('should renders correctly', () => {
    expect(component).toBeDefined();
  });

  it('should has the same snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
