import React, {FC, PropsWithChildren} from 'react';
import {Pressable, ViewStyle} from 'react-native';

import styles from './styles';

import {useTheme} from '~config/themes';

export interface ButtonProps extends PropsWithChildren {
  containerStyle?: ViewStyle;
  onPress?: () => void;
}

const BasicButton: FC<ButtonProps> = ({children, containerStyle, onPress}) => {
  const {colors} = useTheme();

  const themeStyles: ViewStyle = {
    backgroundColor: colors.primary,
  };

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, themeStyles, containerStyle]}>
      {children}
    </Pressable>
  );
};

export default BasicButton;
