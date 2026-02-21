import type { Promotion } from '../types/models';

export const promotions: Promotion[] = [
  {
    id: '1',
    title: '$10 off',
    subtitle: 'Valid until 3:50 p.m, Today',
    description:
      'At select grocery stores • $40 minimum order (excluding promotions) • Delivery orders only',
    icon: require('../../assets/icons/promo-grocery_1.png'),
  },
  {
    id: '2',
    title: '30% off (up to $30) grocery',
    subtitle: 'Use by Feb 17, 2026 1 a.m.',
    description:
      'At select grocery stores • $70 minimum order (excluding promotions) • Delivery orders only',
    icon: require('../../assets/icons/promo-grocery_2.png'),
  },
  {
    id: '3',
    title: '20% off (up to $20) liquor',
    subtitle: 'Use by Feb 18, 2026 1 a.m.',
    description:
      'At select liquor stores • $40 minimum order (excluding promotions) • Delivery orders only',
    icon: require('../../assets/icons/promo-liquor.png'),
  },
];
