import {ImageStyle, Platform, ViewStyle} from 'react-native';

import {SCREEN_WIDTH} from './device';

import {scaleSpace} from '~helpers';

export const DEFAULT_FONT =
  Platform.OS === 'ios'
    ? {
        regular: 'Metropolis', // 400
        bold: 'Metropolis Bold', // 800
      }
    : {
        regular: 'Avenir-Regular', // 400
        bold: 'Avenir-Bold', // 800
      };

export const DEFAULT_SPACES = {
  paddingScreen: scaleSpace(20),
};

export const VIEW_CENTER_STYLES: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
};

export const FULL_WIDTH_SCREEN_IMAGE_STYLES: ImageStyle = {
  width: SCREEN_WIDTH - DEFAULT_SPACES.paddingScreen * 2,
};
