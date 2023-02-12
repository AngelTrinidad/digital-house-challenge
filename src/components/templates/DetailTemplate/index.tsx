import React, {FC, PropsWithChildren} from 'react';
import {ViewStyle} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import styles from './styles';

import {ViewFlex} from '~components/atoms';
import HeaderTitle from '~components/molecules/HeaderTitle';
import {scaleSpace} from '~helpers';

interface Props extends PropsWithChildren {
  title?: string;
}

const DetailTemplate: FC<Props> = ({children, title = '', ...props}) => {
  const {top, bottom} = useSafeAreaInsets();

  const headerStyles: ViewStyle = {
    paddingTop: top + scaleSpace(24),
  };

  const containerStyles: ViewStyle = {
    paddingBottom: bottom,
  };

  return (
    <ViewFlex style={containerStyles} {...props}>
      <HeaderTitle title={title} style={headerStyles} />
      <ViewFlex style={styles.content}>{children}</ViewFlex>
    </ViewFlex>
  );
};

export default DetailTemplate;
