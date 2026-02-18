import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Chip from '../components/Chip';
import RestaurantCard from '../components/RestaurantCard';
import { categories } from '../data/categories';
import { restaurants } from '../data/restaurants';
import type { Restaurant } from '../types/models';
import type { RootStackParamList } from '../navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList>;

const FILTERS = ['Uber One', 'Pickup', 'Offers', 'Under 30 min'] as const;

export default function HomeScreen() {
  const navigation = useNavigation<Nav>();
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [selectedFilter, setSelectedFilter] = React.useState<string>('Uber One');

  const onPressRestaurant = (r: Restaurant) => {
    // Only navigation is required for the assignment.
    navigation.navigate('RestaurantDetails', { id: r.id, name: r.name });
  };

  const renderRestaurant = ({ item }: { item: Restaurant }) => (
    <Pressable onPress={() => onPressRestaurant(item)} style={styles.cardPressable}>
      <RestaurantCard restaurant={item} />
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.locationTitle} numberOfLines={1}>
            Southern Alberta Ins...
          </Text>
          <Ionicons name="chevron-down" size={16} color="#111" />
        </View>

        <Pressable style={styles.headerRight} accessibilityLabel="Notifications">
          <Ionicons name="notifications-outline" size={22} color="#111" />
        </Pressable>
      </View>

      {/* Category chips */}
      <View style={styles.chipsBlock}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsRow}>
          {categories.map((c) => (
            <Chip
              key={c.key}
              label={c.label}
              icon={c.icon}
              selected={selectedCategory === c.key}
              onPress={() => setSelectedCategory(c.key)}
            />
          ))}
        </ScrollView>
      </View>

      {/* Filter chips */}
      <View style={styles.filtersBlock}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsRow}>
          {FILTERS.map((f) => (
            <Chip
              key={f}
              label={f}
              selected={selectedFilter === f}
              onPress={() => setSelectedFilter(f)}
            />
          ))}
        </ScrollView>
      </View>

      {/* Results line */}
      <View style={styles.resultsRow}>
        <Text style={styles.resultsText}>{restaurants.length} results</Text>
      </View>

      {/* Restaurant list */}
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={renderRestaurant}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFF' },

  header: {
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 6, flex: 1 },
  locationTitle: { fontSize: 16, fontWeight: '700', color: '#111', maxWidth: 220 },
  headerRight: { padding: 6 },

  chipsBlock: { paddingHorizontal: 16, paddingBottom: 10 },
  filtersBlock: { paddingHorizontal: 16, paddingBottom: 10 },
  chipsRow: { paddingRight: 16 },

  resultsRow: { paddingHorizontal: 16, paddingBottom: 8 },
  resultsText: { fontSize: 14, fontWeight: '700', color: '#111' },

  listContent: { paddingHorizontal: 16, paddingBottom: 20 },
  cardPressable: { borderRadius: 16 },
});
