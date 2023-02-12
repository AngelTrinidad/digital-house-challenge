import React, {FC} from 'react';
import {ViewProps} from 'react-native';

import styles from './styles';

import {ViewFlex} from '~components/atoms';
import {useTheme} from '~config/themes';

export interface BasicContainerProps extends ViewProps {
  background?: 'primary' | 'secondary';
}

const BasicContainer: FC<BasicContainerProps> = ({
  children,
  style,
  background = 'primary',
  ...props
}) => {
  const {
    colors: {screen},
  } = useTheme();

  const contentStyle = {
    backgroundColor: screen[background],
  };

  return (
    <ViewFlex style={[styles.content, contentStyle, style]} {...props}>
      {children}
    </ViewFlex>
  );
};

export default BasicContainer;
