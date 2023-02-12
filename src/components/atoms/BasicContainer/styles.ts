import {StyleSheet} from 'react-native';

import {DEFAULT_SPACES} from '~constants/styles';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    padding: DEFAULT_SPACES.paddingScreen,
  },
});

export default styles;
