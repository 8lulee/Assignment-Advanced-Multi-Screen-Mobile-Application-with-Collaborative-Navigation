import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Chip from './Chip';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';

interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  deliveryFee: string;
  eta: string;
  promo?: string;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
  onPress?: () => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, onPress }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    if (onPress) {
      onPress();
      return;
    }
    navigation.navigate('RestaurantDetails', {
      id: restaurant.id,
      name: restaurant.name,
    });
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.9} style={styles.cardContainer}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.topRow}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <Text style={styles.heartIcon}>❤️</Text>
        </View>
        <Text style={styles.deliveryEta}>{restaurant.deliveryFee} • {restaurant.eta}</Text>
        <View style={styles.ratingRow}>
          <Text style={styles.rating}>{restaurant.rating} ★ {restaurant.reviews} reviews</Text>
        </View>
        {
          restaurant.promo ?
            <Chip label={restaurant.promo} style={styles.promoBadge} selected={true} />
            : null
        }
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#FFF',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
  infoContainer: {
    padding: 12,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  heartIcon: {
    color: '#FF2D55',
  },
  deliveryEta: {
    marginTop: 4,
    color: '#666',
    fontSize: 14,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rating: {
    color: '#333',
    fontSize: 14,
  },
  promoBadge: {
    marginTop: 6,
    alignSelf: 'flex-start',
    backgroundColor: '#FF2D55',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

export default RestaurantCard;
