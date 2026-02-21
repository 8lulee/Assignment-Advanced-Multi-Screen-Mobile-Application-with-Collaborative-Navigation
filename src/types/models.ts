import type { ImageSourcePropType } from 'react-native';

export type Restaurant = {
  id: string;
  name: string;
  image: string | ImageSourcePropType;  
  rating: number;
  reviews: number;
  deliveryFee: string;
  eta: string;
  promo?: string;
};

export type Category = {
  key: string;
  label: string;
  icon: ImageSourcePropType;
};

export type Promotion = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: ImageSourcePropType;
};