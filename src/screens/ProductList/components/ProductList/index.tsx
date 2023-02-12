import React, {FC, useCallback, useMemo, useState} from 'react';
import {FlatList, Pressable, View} from 'react-native';

import styles from './styles';

import {Button, ProductRow, ViewFlex} from '~components';
import {Product} from '~interfaces';

enum ProductFilter {
  All = 'All',
  Earned = 'Earned',
  Redeemed = 'Redeemed',
}

interface Props {
  products: Product[];
  onProductPress: (productId: string) => void;
}

const ProductList: FC<Props> = ({onProductPress, products}) => {
  const [filter, setFilter] = useState<ProductFilter>(ProductFilter.All);

  const dataWithFilter = useMemo(() => {
    // Return raw list if filter is All
    if (filter === ProductFilter.All) {
      return products;
    }

    // Return redeemed values if is_redemption is true and filter is Redeemed
    // In other case, return earned values if is_redemption is false and filter is Earned
    return products.filter(
      product =>
        (product.is_redemption && filter === ProductFilter.Redeemed) ||
        (!product.is_redemption && filter === ProductFilter.Earned),
    );
  }, [products, filter]);

  const renderItem = useCallback(
    ({item}: {item: Product}) => (
      <Pressable
        onPress={() => onProductPress(item.id)}
        style={styles.productRowContainer}>
        <ProductRow data={item} />
      </Pressable>
    ),
    [onProductPress],
  );

  const keyExtractor = useCallback((item: Product) => item.id, []);

  return (
    <>
      <View style={styles.listContainer}>
        <FlatList
          data={dataWithFilter}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          bounces={false}
        />
      </View>
      <View style={styles.filtersContainer}>
        {filter === ProductFilter.All ? (
          <View style={styles.filteRow}>
            <ViewFlex>
              <Button
                title="Ganados"
                titleVariant="sm"
                onPress={() => setFilter(ProductFilter.Earned)}
              />
            </ViewFlex>
            <ViewFlex>
              <Button
                title="Canjeados"
                titleVariant="sm"
                onPress={() => setFilter(ProductFilter.Redeemed)}
              />
            </ViewFlex>
          </View>
        ) : (
          <Button title="Todos" onPress={() => setFilter(ProductFilter.All)} />
        )}
      </View>
    </>
  );
};

export default ProductList;
