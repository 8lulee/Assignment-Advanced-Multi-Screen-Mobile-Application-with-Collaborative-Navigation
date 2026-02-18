import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import type { Restaurant } from '../types/models';

type Props = {
  restaurant: Restaurant;
};

export default function RestaurantCard({ restaurant }: Props) {
  const imageSource =
    typeof restaurant.image === 'string' ? { uri: restaurant.image } : restaurant.image;

  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {restaurant.name}
          </Text>
          <Text style={styles.rating}>
            {restaurant.rating.toFixed(1)} ({restaurant.reviews})
          </Text>
        </View>

        <Text style={styles.meta}>
          {restaurant.deliveryFee} Delivery Fee • {restaurant.eta}
        </Text>

        {restaurant.promo ? <Text style={styles.promo}>{restaurant.promo}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  image: {
    width: '100%',
    height: 160,
    backgroundColor: '#EEE',
  },
  content: {
    padding: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },
  rating: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
  },
  meta: {
    marginTop: 6,
    fontSize: 13,
    color: '#666',
  },
  promo: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: '700',
    color: '#111',
  },
});
