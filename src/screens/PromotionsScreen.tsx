import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { promotions } from '../data/promotions';

const PromotionsScreen: React.FC = () => {
  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <View style={styles.headerRow}>
        <Ionicons name="close" size={22} color="#111111" />
        <Text style={styles.headerTitle}>Promotions</Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inputRow}>
          <Ionicons
            name="pricetag-outline"
            size={18}
            color="#999999"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Enter promo code"
            placeholderTextColor="#999999"
            style={styles.input}
          />
        </View>

        <Text style={styles.sectionTitle}>Add new promos</Text>

        {promotions.map((promo) => (
          <View key={promo.id} style={styles.card}>
            <View style={styles.cardLeft}>
              <Text style={styles.cardTitle}>{promo.title}</Text>
              <Text style={styles.cardSubtitle}>{promo.subtitle}</Text>
              <Text style={styles.cardDescription}>{promo.description}</Text>

              <View style={styles.cardActions}>
                <TouchableOpacity style={styles.primaryButton}>
                  <Text style={styles.primaryButtonText}>Add promo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.secondaryButton}>
                  <Text style={styles.secondaryButtonText}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Image
              source={promo.icon}
              style={styles.cardIcon}
              resizeMode="contain"
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PromotionsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 8,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111111',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 999,
    borderWidth: 0,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 4,
    marginBottom: 16,
    backgroundColor: '#F2F2F2',
  },
  inputIcon: {
    marginRight: 6,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#111111',
    paddingVertical: 0,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555555',
    marginBottom: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'stretch',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderStyle: 'dashed',
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
  },
  cardLeft: {
    flex: 1,
    paddingRight: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#555555',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 12,
    color: '#777777',
    marginBottom: 12,
  },
  cardActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#000000',
    borderRadius: 999,
    paddingHorizontal: 18,
    paddingVertical: 9,
    marginRight: 8,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  secondaryButton: {
    borderRadius: 999,
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#DDDDDD',
  },
  secondaryButtonText: {
    color: '#111111',
    fontSize: 13,
    fontWeight: '500',
  },
  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
});