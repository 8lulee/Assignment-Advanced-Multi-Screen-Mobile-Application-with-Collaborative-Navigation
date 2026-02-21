import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { TabParamList, RootStackParamList } from '../navigation/types';

type ProfileNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Profile'>,
  NativeStackNavigationProp<RootStackParamList>
>;

type MenuItem = {
  key: string;
  title: string;
  subtitle?: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
};

export default function ProfileScreen() {
  const navigation = useNavigation<ProfileNavigationProp>();

  const handlePromotionsPress = () => {
    navigation.navigate('Promotions');
  };

  const menuItems: MenuItem[] = [
    {
      key: 'family',
      title: 'Family and teens',
      subtitle: 'Teen and adult accounts',
      icon: 'people-outline',
    },
    { key: 'rides', title: 'Rides', icon: 'car-outline' },
    {
      key: 'promotions',
      title: 'Promotions',
      icon: 'pricetag-outline',
      onPress: handlePromotionsPress,
    },
    { key: 'gift', title: 'Send a gift', icon: 'gift-outline' },
    { key: 'help', title: 'Help', icon: 'help-circle-outline' },
    { key: 'groups', title: 'Saved groups', icon: 'bookmark-outline' },
    {
      key: 'business',
      title: 'Set up your business profile',
      subtitle: 'Automate work travel & meal expenses',
      icon: 'briefcase-outline',
    },
    { key: 'rewards', title: 'Partner Rewards', icon: 'trophy-outline' },
    { key: 'one', title: 'Uber One', icon: 'ribbon-outline' },
    {
      key: 'invite',
      title: 'Invite friends',
      subtitle: 'Get $15 off your order',
      icon: 'person-add-outline',
    },
  ];

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.headerRow}>
          <Text style={styles.name}>Xin Wen</Text>
          <View style={styles.avatar}>
            <Ionicons name="person-outline" size={28} color="#999999" />
          </View>
        </View>

        {/* Shortcut Row */}
        <View style={styles.shortcutsRow}>
          <View style={styles.shortcutCard}>
            <Ionicons name="heart-outline" size={32} color="#FF5A5F" />
            <Text style={styles.shortcutLabel}>Favourites</Text>
          </View>
          <View style={styles.shortcutCard}>
            <Ionicons name="card-outline" size={32} color="#5A5AFF" />
            <Text style={styles.shortcutLabel}>Wallet</Text>
          </View>
          <View style={styles.shortcutCard}>
            <Ionicons name="receipt-outline" size={32} color="#5AFF5A" />
            <Text style={styles.shortcutLabel}>Orders</Text>
          </View>
        </View>

        {/* Menu List */}
        <View style={styles.menuList}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.key}
              style={styles.menuItem}
              onPress={item.onPress}
            >
              <Ionicons
                name={item.icon}
                size={24}
                color="#555555"
                style={styles.menuIcon}
              />
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                {item.subtitle ? (
                  <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
                ) : null}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 3; // 16 padding left + right + 8 spacing

const styles = StyleSheet.create({
  safeArea: { backgroundColor: '#FFFFFF', flex: 1 },
  container: { padding: 16, paddingBottom: 24, paddingTop: 8 },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  name: { fontSize: 28, fontWeight: 'bold', color: '#222222' },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shortcutsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  shortcutCard: {
    width: CARD_WIDTH,
    height: 80,
    backgroundColor: '#FAFAFA',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  shortcutLabel: { marginTop: 4, fontSize: 12, color: '#555555' },
  menuList: {},
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EEEEEE',
  },
  menuIcon: { marginRight: 16 },
  menuTextContainer: { flex: 1 },
  menuTitle: { fontSize: 16, color: '#222222' },
  menuSubtitle: { fontSize: 12, color: '#777777', marginTop: 2 },
});