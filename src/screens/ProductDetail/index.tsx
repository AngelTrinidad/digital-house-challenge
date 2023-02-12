import React, {FC} from 'react';
import {Image} from 'react-native';

import styles from './styles';

import {
  AsyncContent,
  Button,
  Card,
  DetailTemplate,
  Typography,
  ViewFlex,
} from '~components';
import {formatNumber, getFullDate} from '~helpers';
import {useGetProductDetail} from '~hooks';
import {MainScreen, Route} from '~navigation/types';

const ProductDetailScreen: FC<MainScreen<Route.ProductDetail>> = ({
  navigation,
  route: {params},
}) => {
  const {data, isLoading, isError, refetch} = useGetProductDetail(params.id);

  return (
    <DetailTemplate title={data?.product}>
      <AsyncContent
        isLoading={isLoading}
        isError={isError}
        onRetry={refetch}
        showRetry>
        {!!data && (
          <>
            <ViewFlex>
              <Card background="white">
                <Image
                  source={{uri: data.image}}
                  style={styles.image}
                  resizeMode="cover"
                />
              </Card>
              <Typography color="secondary" style={styles.detailTitle}>
                Detalles del producto:
              </Typography>
              <Typography variant="lg" style={styles.productDetail}>
                Comprado el {getFullDate(data.createdAt)}
              </Typography>
              <Typography color="secondary" style={styles.pointsTitle}>
                Con esta compra acumulaste:
              </Typography>
              <Typography variant="xxl">
                {formatNumber(data.points)} puntos
              </Typography>
            </ViewFlex>
            <Button title="Aceptar" onPress={navigation.goBack} />
          </>
        )}
      </AsyncContent>
    </DetailTemplate>
  );
};

export default ProductDetailScreen;
