import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import SettingsScreen from '../../screens/SettingsScreen';
import FavouritesScreen from '../../screens/FavouritesScreen';

const SettingsStack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerMode: 'screen',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // ...TransitionPresets.SlideFromRightIOS
      }}
    >
      <SettingsStack.Screen
        name="Options"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <SettingsStack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{ headerShown: true }}
      />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
