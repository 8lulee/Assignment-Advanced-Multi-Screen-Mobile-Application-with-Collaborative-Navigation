import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Chip from '../components/Chip';
import RestaurantCard from '../components/RestaurantCard';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather, Ionicons } from '@expo/vector-icons';
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

const restaurants: Restaurant[] = [
  {
    id: 'boddy-chao',
    name: "Boddy Chao's Restaurant",
    image: '../../assets/restaurants/boddy-chao.jpeg',
    rating: 4.5,
    reviews: 240,
    deliveryFee: '$3',
    eta: '30‑45 min',
    promo: 'Free Pizza',
  },
  {
    id: '2',
    name: 'Sushi Hub',
    image: '../../assets/restaurants/Sushi-Hub.jpeg',
    rating: 4.2,
    reviews: 190,
    deliveryFee: '$5',
    eta: '25‑35 min',
  },
  {
    id: '3',
    name: 'Burger King',
    image: '../../assets/restaurants/Burger-King.jpeg',
    rating: 4.0,
    reviews: 180,
    deliveryFee: '$2',
    eta: '20‑30 min',
    promo: '20% OFF',
  },
];

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const renderItem = ({ item }: { item: Restaurant; index: number }) => (
    <RestaurantCard
      restaurant={item}
      onPress={() =>
        navigation.navigate('RestaurantDetails', {
          id: item.id,
          name: item.name,
        })
      }
    />
  );

  const header = () => (
    <View style={styles.headerContainer}>
      <View style={styles.topBar}>
        <View style={styles.locationContainer}>
          <Feather name="chevron-down" size={20} color="#000" />
          <Text style={styles.locationText}>Southern Alberta Ins...</Text>
        </View>
        <Pressable onPress={() => {}} style={styles.bellButton}>
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </Pressable>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipRowContainer}>
        <Chip label="All" selected={true} />
        <Chip label="Rides" selected={false} />
        <Chip label="Flowers" selected={false} />
        <Chip label="Grocery" selected={false} />
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipRowContainer}>
        <Chip label="Uber One" selected={false} />
        <Chip label="Pickup" selected={false} />
        <Chip label="Offers" selected={false} />
        <Chip label="Under $30" selected={false} />
      </ScrollView>
      <View style={styles.resultsRow}>
        <Text style={styles.resultsText}>451 results</Text>
        <Pressable style={styles.resetButton} onPress={() => {}}
          ><Text style={styles.resetButtonText}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        style={styles.list}
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={header}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    flex: 1,
  },
  headerContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bellButton: {
    padding: 8,
  },
  chipRowContainer: {
    marginTop: 8,
    marginHorizontal: -8,
  },
  resultsRow: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultsText: {
    fontSize: 14,
  },
  resetButton: {
    backgroundColor: '#eee',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 50,
  },
  resetButtonText: {
    fontSize: 14,
    color: '#000',
  },
});
