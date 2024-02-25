import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from '@expo-google-fonts/oswald';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import MapScreen from './src/screens/MapScreen';
import RestaurantsScreen from './src/screens/RestaurantsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'restaurant',
  Settings: 'settings',
  Map: 'map',
};

export default function App() {
  const [oswaqldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaqldLoaded || !latoLoaded) {
    return null;
  }

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
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen
              name="Restaurants"
              component={RestaurantsScreen}
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
        </NavigationContainer>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
