import React from 'react';

import ProductRow from '.';

import {render} from '~helpers/testing';
import {product} from '~mocks';

describe('<ProductRow />', () => {
  let component: any;

  beforeEach(() => {
    component = render(<ProductRow data={product} />);
  });

  it('should renders correctly', () => {
    expect(component).toBeDefined();
  });

  it('should has the same snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
