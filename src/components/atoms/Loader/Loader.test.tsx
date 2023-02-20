import React from 'react';

import Loader from '.';

import {render} from '~helpers/testing';

describe('<Loader />', () => {
  let component: any;

  beforeEach(() => {
    component = render(<Loader isLoading />);
  });

  it('should render correctly', () => {
    expect(component).toBeDefined();
  });

  it('should has same snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
