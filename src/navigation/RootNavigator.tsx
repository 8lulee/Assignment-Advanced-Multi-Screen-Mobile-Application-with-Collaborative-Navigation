import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { RootStackParamList } from './types';
import TabNavigator from './TabNavigator';
import PromotionsScreen from '../screens/PromotionsScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Promotions" component={PromotionsScreen} />
      <Stack.Screen name="RestaurantDetails" component={RestaurantDetailsScreen} />
    </Stack.Navigator>
  );
}
