import {Product} from '~interfaces';

export const getCurrentPoints = (products: Product[]): number => {
  return products.reduce((prev, current) => {
    return current.is_redemption
      ? prev - current.points
      : prev + current.points;
  }, 0);
};
