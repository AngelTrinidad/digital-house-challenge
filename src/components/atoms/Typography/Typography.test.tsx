import React from 'react';

import {render} from '@testing-library/react-native';

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

  it('should convert variant to correct font size', () => {
    const XXLComponentJSON = render(
      <Typography variant="xxl" />,
    ).toJSON() as any;
    const XLComponentJSON = render(<Typography variant="xl" />).toJSON() as any;
    const LGComponentJSON = render(<Typography variant="lg" />).toJSON() as any;
    const SMComponentJSON = render(<Typography variant="sm" />).toJSON() as any;

    expect(XXLComponentJSON.props.style).toMatchObject({
      fontSize: 24,
    });

    expect(XLComponentJSON.props.style).toMatchObject({
      fontSize: 20,
    });

    expect(LGComponentJSON.props.style).toMatchObject({
      fontSize: 16,
    });

    expect(SMComponentJSON.props.style).toMatchObject({
      fontSize: 12,
    });
  });
});
