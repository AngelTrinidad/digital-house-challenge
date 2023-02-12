import {StyleSheet} from 'react-native';

import {scaleSpace} from '~helpers';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    gap: scaleSpace(12),
    minHeight: scaleSpace(56),
    alignItems: 'center',
  },
  image: {
    borderRadius: 10,
    width: scaleSpace(55),
    height: scaleSpace(55),
  },
  pointContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  date: {
    marginTop: scaleSpace(8),
    fontWeight: '400',
  },
});

export default styles;
