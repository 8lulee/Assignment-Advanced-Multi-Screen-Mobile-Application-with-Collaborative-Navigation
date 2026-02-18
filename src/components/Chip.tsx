import * as React from 'react';
import { Pressable, Text, StyleSheet, View, Image, type ImageSourcePropType } from 'react-native';

type Props = {
  label: string;
  selected?: boolean;
  icon?: ImageSourcePropType;
  onPress?: () => void;
};

export default function Chip({ label, selected = false, icon, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, selected ? styles.selected : styles.unselected]}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      {icon ? (
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      ) : (
        <View style={styles.iconPlaceholder} />
      )}
      <Text style={[styles.label, selected ? styles.labelSelected : styles.labelUnselected]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    marginRight: 10,
  },
  selected: {
    backgroundColor: '#ECECEC',
  },
  unselected: {
    backgroundColor: '#F6F6F6',
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  iconPlaceholder: {
    width: 18,
    height: 18,
    marginRight: 8,
    borderRadius: 4,
    backgroundColor: '#DDD',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  },
  labelSelected: {
    color: '#111',
  },
  labelUnselected: {
    color: '#444',
  },
});
