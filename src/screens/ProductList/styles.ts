import {StyleSheet} from 'react-native';

import {scaleSpace} from '~helpers';

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: scaleSpace(20),
  },
  headerUsername: {
    marginTop: scaleSpace(8),
    fontWeight: '400',
  },
  content: {
    flex: 1,
  },
  sectionTitle: {
    marginVertical: scaleSpace(20),
  },
});

export default styles;
