import {getCurrentMonth, getFullDate} from '.';

describe('Date helpers', () => {
  it('should return current month', () => {
    expect(getCurrentMonth()).toMatchObject({
      number: 2,
      name: 'Febrero',
    });
  });

  it('should return full date', () => {
    expect(getFullDate()).toBe('11 de Febrero, 2023');
  });
});
