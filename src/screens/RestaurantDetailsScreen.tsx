import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import type { RootStackParamList } from '../navigation/types';

type RestaurantDetailsRouteProp = RouteProp<
  RootStackParamList,
  'RestaurantDetails'
>;

type FeaturedItem = {
  id: string;
  title: string;
  subtitle?: string;
  price: string;
  rating: number;
  ratingCount: number;
  image: any;
};

const featuredItems: FeaturedItem[] = [
  {
    id: '1',
    title: 'Shanghai Style Fried Noodles',
    subtitle: 'Stir-fried noodles with veggies',
    price: '$12.99',
    rating: 4.5,
    ratingCount: 500,
    image: require('../../assets/restaurants/Boddy-Chao.jpeg'),
  },
  {
    id: '2',
    title: 'Steamed Pork Dumplings',
    subtitle: 'Juicy soup dumplings',
    price: '$8.99',
    rating: 4.7,
    ratingCount: 800,
    image: require('../../assets/restaurants/Sushi-Hub.jpeg'),
  },
];

const RestaurantDetailsScreen: React.FC = () => {
  const route = useRoute<RestaurantDetailsRouteProp>();
  const { name } = route.params;

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero image */}
        <View style={styles.heroContainer}>
          <Image
            source={require('../../assets/restaurants/Boddy-Chao.jpeg')}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay} />
        </View>

        {/* Welcome banner */}
        <View style={styles.welcomeBanner}>
          <Text style={styles.welcomeTitle}>Welcome</Text>
          <Text style={styles.welcomeSubtitle}>
            Authentic Chinese cuisine. Shanghai Style Fried Noodles. Steamed
            Pork Dumplings. Generous portions.
          </Text>
        </View>

        {/* Restaurant header */}
        <View style={styles.headerBlock}>
          <Text style={styles.restaurantName}>{name}</Text>
          <Text style={styles.restaurantNameSecondary}>鄭家莊</Text>

          <View style={styles.ratingRow}>
            <Text style={styles.ratingScore}>4.6</Text>
            <Ionicons
              name="star"
              size={14}
              color="#F5A623"
              style={styles.ratingStar}
            />
            <Text style={styles.ratingText}>(3,000+)</Text>
            <Text style={styles.dot}>·</Text>
            <Text style={styles.feeText}>$0.99 Delivery Fee</Text>
            <Text style={styles.dot}>·</Text>
            <Text style={styles.feeText}>$2.50–$6.50 Service Fee</Text>
          </View>

          <Text style={styles.metaText}>12.7 km</Text>

          <View style={styles.metaRow}>
            <Ionicons
              name="time-outline"
              size={16}
              color="#555555"
              style={styles.metaIcon}
            />
            <Text style={styles.metaText}>Available Wednesday 4:00 PM</Text>
          </View>
        </View>

        {/* Delivery / Pickup / Group order row */}
        <View style={styles.segmentRow}>
          <View style={[styles.segmentButton, styles.segmentButtonActive]}>
            <Text style={styles.segmentTextActive}>Delivery</Text>
          </View>
          <View style={styles.segmentButton}>
            <Text style={styles.segmentText}>Pickup</Text>
          </View>
          <TouchableOpacity style={styles.segmentRight}>
            <Ionicons
              name="people-outline"
              size={16}
              color="#111111"
              style={styles.segmentRightIcon}
            />
            <Text style={styles.segmentRightText}>Group order</Text>
          </TouchableOpacity>
        </View>

        {/* Fee info row */}
        <View style={styles.feeRow}>
          <View style={styles.feeCard}>
            <Text style={styles.feeTitle}>$0.99 Delivery Fee +</Text>
            <Text style={styles.feeSubtitle}>$2.50–$6.50 Service Fee</Text>
          </View>
          <View style={styles.feeCard}>
            <Text style={styles.feeTitle}>Closed</Text>
            <Text style={styles.feeSubtitle}>Delivery time</Text>
          </View>
        </View>

        {/* Featured items */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Items</Text>
        </View>

        {featuredItems.map((item) => (
          <View key={item.id} style={styles.itemCard}>
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              {item.subtitle ? (
                <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
              ) : null}
              <Text style={styles.itemPrice}>{item.price}</Text>

              <View style={styles.itemRatingRow}>
                <Text style={styles.itemRatingScore}>{item.rating.toFixed(1)}</Text>
                <Ionicons
                  name="star"
                  size={12}
                  color="#F5A623"
                  style={styles.itemRatingStar}
                />
                <Text style={styles.itemRatingCount}>
                  ({item.ratingCount}+)
                </Text>
              </View>
            </View>

            <View style={styles.itemImageContainer}>
              <Image
                source={item.image}
                style={styles.itemImage}
                resizeMode="cover"
              />
              <TouchableOpacity style={styles.addButton}>
                <Ionicons name="add" size={18} color="#111111" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantDetailsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 32,
  },
  heroContainer: {
    width: '100%',
    height: 180,
    backgroundColor: '#EEEEEE',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 48,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  welcomeBanner: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: '#F86344',
  },
  welcomeTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  welcomeSubtitle: {
    fontSize: 12,
    color: '#FFEFEA',
  },
  headerBlock: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
  },
  restaurantName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111111',
  },
  restaurantNameSecondary: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555555',
    marginTop: 2,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingScore: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111111',
  },
  ratingStar: {
    marginLeft: 4,
  },
  ratingText: {
    fontSize: 12,
    color: '#555555',
    marginLeft: 4,
  },
  dot: {
    fontSize: 12,
    color: '#999999',
    marginHorizontal: 4,
  },
  feeText: {
    fontSize: 12,
    color: '#555555',
  },
  metaText: {
    fontSize: 12,
    color: '#777777',
    marginTop: 4,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  metaIcon: {
    marginRight: 4,
  },
  segmentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: '#FFFFFF',
  },
  segmentButton: {
    flex: 1,
    borderRadius: 999,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    backgroundColor: '#F3F3F3',
  },
  segmentButtonActive: {
    backgroundColor: '#111111',
  },
  segmentText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#333333',
  },
  segmentTextActive: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  segmentRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  segmentRightIcon: {
    marginRight: 4,
  },
  segmentRightText: {
    fontSize: 13,
    color: '#111111',
  },
  feeRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
  },
  feeCard: {
    flex: 1,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#DDDDDD',
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginRight: 8,
  },
  feeTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111111',
    marginBottom: 2,
  },
  feeSubtitle: {
    fontSize: 11,
    color: '#777777',
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 4,
    backgroundColor: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111111',
  },
  itemCard: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
  },
  itemTextContainer: {
    flex: 1,
    paddingRight: 8,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111111',
  },
  itemSubtitle: {
    fontSize: 12,
    color: '#777777',
    marginTop: 2,
  },
  itemPrice: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111111',
    marginTop: 6,
  },
  itemRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  itemRatingScore: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111111',
  },
  itemRatingStar: {
    marginLeft: 4,
  },
  itemRatingCount: {
    fontSize: 12,
    color: '#777777',
    marginLeft: 4,
  },
  itemImageContainer: {
    width: 120,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  itemImage: {
    width: '100%',
    height: 90,
  },
  addButton: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
});