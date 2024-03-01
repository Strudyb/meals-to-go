import { createStackNavigator } from '@react-navigation/stack';
import RestaurantScreen from '../../screens/RestaurantsScreen';

const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen name="RestaurantList" component={RestaurantScreen} />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
