import {StyleSheet} from 'react-native';

import {scaleSpace} from '~helpers';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: scaleSpace(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default styles;
