import {StyleSheet} from 'react-native';

import {DEFAULT_SPACES} from '~constants/styles';
import {scaleSpace} from '~helpers';

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: DEFAULT_SPACES.paddingScreen,
    paddingVertical: scaleSpace(24),
  },
});

export default styles;
