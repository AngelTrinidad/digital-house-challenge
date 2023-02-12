import React, {FC} from 'react';
import {ActivityIndicator} from 'react-native';

import {useTheme} from '~config/themes';

interface Props {
  isLoading?: boolean;
}

const Loader: FC<Props> = ({isLoading}) => {
  const {colors} = useTheme();
  return (
    <ActivityIndicator
      color={colors.primary}
      size="large"
      animating={isLoading}
    />
  );
};

export default Loader;
