import React, {FC} from 'react';

import {TextStyle} from 'react-native/types';

import styles from './styles';

import BasicButton, {ButtonProps} from '~components/atoms/BasicButton';
import Typography, {TypographyVariant} from '~components/atoms/Typography';

interface Props extends ButtonProps {
  title: string;
  textStyle?: TextStyle;
  titleVariant?: TypographyVariant;
}

const Button: FC<Props> = ({
  title,
  textStyle,
  titleVariant = 'lg',
  ...props
}) => {
  return (
    <BasicButton {...props}>
      <Typography variant={titleVariant} style={[styles.buttonText, textStyle]}>
        {title}
      </Typography>
    </BasicButton>
  );
};

export default Button;
