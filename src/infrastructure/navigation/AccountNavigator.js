import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/LoginScreen';
import AccountScreen from '../../screens/AccountScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import { TransitionPresets } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
