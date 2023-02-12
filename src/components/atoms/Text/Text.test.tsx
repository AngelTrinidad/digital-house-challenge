import React from 'react';

import {render} from '@testing-library/react-native';

import Text from '.';

import {DEFAULT_FONT} from '~constants/styles';

describe('<BasicButton />', () => {
  let component: any;

  beforeEach(() => {
    component = render(<Text>Hello</Text>);
  });

  it('should renders correctly', () => {
    expect(component).toBeDefined();
  });

  it('should has the same snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should convert font weight to font family', () => {
    const TextComponent = render(
      <Text style={{fontWeight: '800'}}>Hello</Text>,
    );
    const jsonComponent = TextComponent.toJSON() as any;
    expect(jsonComponent.props.style.fontFamily).toBe(DEFAULT_FONT.bold);
  });
});
