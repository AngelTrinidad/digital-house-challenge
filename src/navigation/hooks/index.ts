import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {MainStackParamList} from '../types';

/**
 * Wrapper for useNavigation hook
 */
export const useMainNavigation = () =>
  useNavigation<NativeStackNavigationProp<MainStackParamList>>();

/**
 * Wrapper for useRoute hook
 */
export const useMainRoute = <Screen extends keyof MainStackParamList>() =>
  useRoute<RouteProp<MainStackParamList, Screen>>();
