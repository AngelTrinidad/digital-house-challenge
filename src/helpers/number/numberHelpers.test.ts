import {formatNumber} from '.';

describe('Number helpers', () => {
  it('should format the number correctly', () => {
    expect(formatNumber(123450)).toBe('123,450');
  });

  it('should format the number correctly with decimals', () => {
    expect(formatNumber(123450.25)).toBe('123,450.25');
  });
});
