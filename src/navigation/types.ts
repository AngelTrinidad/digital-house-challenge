import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum Route {
  ProductList = 'ProductList',
  ProductDetail = 'ProductDetail',
}

export type MainStackParamList = {
  [Route.ProductList]: undefined;
  [Route.ProductDetail]: {
    id: string;
  };
};

export type MainRoute<R extends keyof MainStackParamList> = RouteProp<
  MainStackParamList,
  R
>;

export type MainScreen<R extends keyof MainStackParamList> = {
  route: MainRoute<R>;
  navigation: NativeStackNavigationProp<MainStackParamList, R>;
};
