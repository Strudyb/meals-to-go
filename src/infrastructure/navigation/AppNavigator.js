import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from '../../screens/MapScreen';
import RestaurantsNavigator from './RestaurantsNavigator';
import { FavouritesContextProvider } from '../../services/favourites/FavouritesContext';
import { LocationContextProvider } from '../../services/location/location.context';
import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context';
import SettingsNavigator from './SettingsNavigator';

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
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
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
              component={SettingsNavigator}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};

export default AppNavigator;
