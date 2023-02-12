import React, {FC} from 'react';
import {Text as RNText, StyleSheet, TextProps} from 'react-native';

import {DEFAULT_FONT} from '~constants/styles';
import {scaleText} from '~helpers';

/**
 * Conver font weight to the corresponding Font Family
 * @param value Font Weight value
 * @returns Font Family
 */
const getFontByWeight = (value: string | undefined) => {
  switch (value) {
    case '400':
    default:
      return DEFAULT_FONT.regular;
    case '800':
      return DEFAULT_FONT.bold;
  }
};

interface Props extends TextProps {}

const Text: FC<Props> = ({style, children, ...props}) => {
  const flattenStyles = StyleSheet.flatten(style);

  // Flattening the styles and defining scale font size and font family
  const textStyles = {
    ...flattenStyles,
    ...(!!flattenStyles && {
      fontSize: scaleText(flattenStyles.fontSize || 14),
      fontFamily: getFontByWeight(flattenStyles.fontWeight),
    }),
  };

  return (
    <RNText style={textStyles} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
