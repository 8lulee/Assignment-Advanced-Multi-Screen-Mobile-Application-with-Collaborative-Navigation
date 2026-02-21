import type { Restaurant } from '../types/models';

const restaurantImages = {
  'boddy-chao': require('../../assets/restaurants/Boddy-Chao.jpeg'),
  'Sushi-Hub': require('../../assets/restaurants/Sushi-Hub.jpeg'),
  'Burger-King': require('../../assets/restaurants/Burger-King.jpeg'),
} as const;

export const restaurants: Restaurant[] = [
  {
    id: 'boddy-chao',
    name: "Boddy Chao's Restaurant",
    image: restaurantImages['boddy-chao'],
    rating: 4.5,
    reviews: 240,
    deliveryFee: '$3',
    eta: '30-45 min',
    promo: 'Free Pizza',
  },
  {
    id: '2',
    name: 'Sushi Hub',
    image: restaurantImages['Sushi-Hub'],
    rating: 4.2,
    reviews: 190,
    deliveryFee: '$5',
    eta: '25-35 min',
  },
  {
    id: '3',
    name: 'Burger King',
    image: restaurantImages['Burger-King'],
    rating: 4.0,
    reviews: 180,
    deliveryFee: '$2',
    eta: '20-30 min',
    promo: '20% OFF',
  },
];
