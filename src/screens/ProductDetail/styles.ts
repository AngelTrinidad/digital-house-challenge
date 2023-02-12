import {StyleSheet} from 'react-native';

import {scaleSpace} from '~helpers';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: scaleSpace(350),
    borderRadius: 10,
  },
  content: {
    justifyContent: 'center',
    paddingVertical: scaleSpace(32),
  },
  detailTitle: {
    marginTop: scaleSpace(32),
  },
  productDetail: {
    marginVertical: scaleSpace(20),
  },
  pointsTitle: {
    marginBottom: scaleSpace(32),
  },
});

export default styles;
