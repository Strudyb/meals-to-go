import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from '../../screens/MapScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import RestaurantsNavigator from './RestaurantsNavigator';

const TAB_ICON = {
  Restaurants: 'restaurant',
  Settings: 'settings',
  Map: 'map',
};

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
      tabBarStyle: {
        position: 'absolute',
        // backgroundColor: 'wheat',
        bottom: 0,
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    };
  };

  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen
        name="Restaurants"
        component={RestaurantsNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
