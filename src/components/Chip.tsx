import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

interface ChipProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

const Chip: React.FC<ChipProps> = ({ label, selected = false, onPress, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, selected && styles.selected, style]}
    >
      <Text style={[styles.text, selected && styles.textSelected]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    borderRadius: 15,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: '#FF2D55',
  },
  text: {
    color: '#333',
    fontSize: 14,
    textAlign: 'center',
  },
  textSelected: {
    color: '#FFF',
  },
});

export default Chip;
