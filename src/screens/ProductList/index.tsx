import React, {FC, useCallback} from 'react';
import {View} from 'react-native';

import CurrentPoints from './components/CurrentPoints';
import ProductList from './components/ProductList';
import styles from './styles';

import {AsyncContent, SafeAreaContainer, Typography} from '~components';
import {useGetProducts} from '~hooks';
import {MainScreen, Route} from '~navigation/types';

const ProductListScreen: FC<MainScreen<Route.ProductList>> = ({navigation}) => {
  const {data, isLoading, isError, refetch} = useGetProducts();

  const handleProductPress = useCallback(
    (id: string) => {
      navigation.navigate(Route.ProductDetail, {
        id,
      });
    },
    [navigation],
  );

  return (
    <SafeAreaContainer>
      <View style={styles.headerContainer}>
        <Typography variant="xl">Bienvenido de vuelta!</Typography>
        <Typography variant="lg" style={styles.headerUsername}>
          Angel Trinidad
        </Typography>
      </View>
      <AsyncContent
        isLoading={isLoading}
        isError={isError}
        onRetry={refetch}
        showRetry>
        {!!data && (
          <View style={styles.content}>
            <Typography color="secondary" style={styles.sectionTitle}>
              Tus puntos
            </Typography>
            <CurrentPoints products={data} />
            <Typography color="secondary" style={styles.sectionTitle}>
              Tus movimientos
            </Typography>
            <ProductList products={data} onProductPress={handleProductPress} />
          </View>
        )}
      </AsyncContent>
    </SafeAreaContainer>
  );
};

export default ProductListScreen;
