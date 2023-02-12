import {StyleSheet} from 'react-native';

import {scaleSpace} from '~helpers';

const styles = StyleSheet.create({
  card: {
    padding: scaleSpace(20),
    minHeight: scaleSpace(144),
  },
  title: {
    color: 'white',
    fontSize: 16,
    position: 'absolute',
    top: 20,
    left: 20,
  },
  points: {
    textAlign: 'center',
    color: 'white',
    fontSize: 32,
    marginTop: scaleSpace(8),
  },
});

export default styles;
