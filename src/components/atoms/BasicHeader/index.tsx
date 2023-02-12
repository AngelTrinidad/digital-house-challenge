import React, {FC, PropsWithChildren} from 'react';
import {View, ViewStyle} from 'react-native';

import styles from './styles';

import {useTheme} from '~config/themes';

export interface BasicHeaderProps extends PropsWithChildren {
  style?: ViewStyle;
}

const BasicHeader: FC<BasicHeaderProps> = ({children, style}) => {
  const {colors} = useTheme();

  const headerStyles: ViewStyle = {
    backgroundColor: colors.secondary,
  };

  return <View style={[styles.header, headerStyles, style]}>{children}</View>;
};

export default BasicHeader;
