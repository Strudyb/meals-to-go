import {
  CardStyleInterpolators,
  createStackNavigator
} from '@react-navigation/stack';
import FavouritesScreen from '../../screens/FavouritesScreen';
import SettingsScreen from '../../screens/SettingsScreen';

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
