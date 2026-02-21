import type { Category } from '../types/models';

export const categories: Category[] = [
  { key: 'all', label: 'All', icon: require('../../assets/icons/all.png') },
  { key: 'rides', label: 'Rides', icon: require('../../assets/icons/rides.png') },
  { key: 'flowers', label: 'Flowers', icon: require('../../assets/icons/flowers.png') },
  { key: 'grocery', label: 'Grocery', icon: require('../../assets/icons/grocery.png') },
];
