import React, {FC} from 'react';
import {ViewStyle} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {BasicContainer, BasicContainerProps} from '~components/atoms';
import {DEFAULT_SPACES} from '~constants/styles';

interface Props extends BasicContainerProps {
  edges?: ('top' | 'bottom')[];
}

const SafeAreaContainer: FC<Props> = ({
  edges = ['top', 'bottom'],
  children,
  style,
  ...props
}) => {
  const {top, bottom} = useSafeAreaInsets();

  const containerStyles: ViewStyle = {
    paddingTop:
      (edges.includes('top') && top + DEFAULT_SPACES.paddingScreen) ||
      undefined,
    paddingBottom:
      (edges.includes('bottom') && bottom + DEFAULT_SPACES.paddingScreen) ||
      undefined,
  };

  return (
    <BasicContainer style={[containerStyles, style]} {...props}>
      {children}
    </BasicContainer>
  );
};

export default SafeAreaContainer;
