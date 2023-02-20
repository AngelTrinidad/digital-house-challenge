import React, {FC, memo} from 'react';
import {Image, TextStyle, View} from 'react-native';

import styles from './styles';

import {Typography, ViewFlex} from '~components/atoms';
import {useTheme} from '~config/themes';
import {formatNumber, getFullDate} from '~helpers';
import {Product} from '~interfaces';

interface Props {
  data: Product;
}

const ProductRow: FC<Props> = ({
  data: {createdAt, image, product, is_redemption, points},
}) => {
  const {colors} = useTheme();
  const humanizedDate = getFullDate(createdAt);
  const prefixStyles: TextStyle = {
    color: is_redemption ? colors.error : colors.success,
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
      <ViewFlex>
        <Typography numberOfLines={2}>{product}</Typography>
        <Typography variant="sm" style={styles.date}>
          {humanizedDate}
        </Typography>
      </ViewFlex>
      <View style={styles.pointContainer}>
        <Typography variant="lg" style={prefixStyles}>
          {is_redemption ? '-' : '+'}
        </Typography>
        <Typography variant="lg" adjustsFontSizeToFit>
          {formatNumber(points)}
        </Typography>
      </View>
      <Typography variant="lg">{'>'}</Typography>
    </View>
  );
};

export default memo(ProductRow);
