import React, {FC} from 'react';
import {View, ViewProps} from 'react-native';

import styles from './styles';

import {VIEW_CENTER_STYLES} from '~constants/styles';

interface Props extends ViewProps {
  center?: boolean;
}

const ViewFlex: FC<Props> = ({style, children, center, ...props}) => {
  return (
    <View style={[styles.view, center && VIEW_CENTER_STYLES, style]} {...props}>
      {children}
    </View>
  );
};

export default ViewFlex;
