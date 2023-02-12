import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Route} from '../../types';

import ProductDetailScreen from '~screens/ProductDetail';
import ProductListScreen from '~screens/ProductList';

const Stack = createNativeStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name={Route.ProductList} component={ProductListScreen} />
      <Stack.Screen
        name={Route.ProductDetail}
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default ProductStack;
