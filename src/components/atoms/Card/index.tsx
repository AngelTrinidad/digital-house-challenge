import React, {FC} from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';

import styles from './styles';

import {useTheme} from '~config/themes';

interface Props extends ViewProps {
  background?: string;
}

const Card: FC<Props> = ({background, children, style, ...props}) => {
  const {colors} = useTheme();

  const themeStyles: ViewStyle = {
    backgroundColor: background ? background : colors.primary,
  };

  return (
    <View style={[styles.card, themeStyles, style]} {...props}>
      {children}
    </View>
  );
};

export default Card;
