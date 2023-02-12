import {Product} from '~interfaces';

export const product: Product = {
  createdAt: '2022-12-09T06:34:25.607Z',
  product: 'Handmade Metal Shoes',
  points: 20000,
  image: 'https://loremflickr.com/640/480/transport',
  is_redemption: false,
  id: '1',
};

export const redemptionProduct: Product = {
  createdAt: '2022-12-09T17:02:51.904Z',
  product: 'Recycled Plastic Tuna',
  points: 15000,
  image: 'https://loremflickr.com/640/480/technics',
  is_redemption: true,
  id: '2',
};
