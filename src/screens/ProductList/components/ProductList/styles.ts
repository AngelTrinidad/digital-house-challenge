import {StyleSheet} from 'react-native';

import {scaleSpace} from '~helpers';

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: scaleSpace(10),
    paddingVertical: scaleSpace(24),
    borderRadius: 10,
  },
  filtersContainer: {
    marginTop: 40,
  },
  filteRow: {
    flexDirection: 'row',
    gap: scaleSpace(12),
  },
  productRowContainer: {
    marginBottom: scaleSpace(8),
  },
});

export default styles;
