import {capitalizeFirstLetter} from '.';

describe('String helpers', () => {
  it('should capitalize first letter of "testing"', () => {
    expect(capitalizeFirstLetter('testing')).toBe('Testing');
  });
});
