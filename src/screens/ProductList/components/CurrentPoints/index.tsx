import React, {FC, useMemo} from 'react';

import styles from './styles';

import {Card, Typography, ViewFlex} from '~components';
import {formatNumber, getCurrentMonth, getCurrentPoints} from '~helpers';
import {Product} from '~interfaces';

interface Props {
  products: Product[];
}

const CurrentPoints: FC<Props> = ({products}) => {
  const points = useMemo(() => getCurrentPoints(products), [products]);
  return (
    <Card style={styles.card}>
      <Typography style={styles.title}>{getCurrentMonth().name}</Typography>
      <ViewFlex center>
        <Typography style={styles.points} testID="current-points">
          {formatNumber(points)} pts
        </Typography>
      </ViewFlex>
    </Card>
  );
};

export default CurrentPoints;
