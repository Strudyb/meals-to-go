import { SafeAreaView } from 'react-native';
import RestaurantInfoCard from '../components/restaurant/RestaurantInfoCard';

const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  console.log(restaurant);
  return (
    <SafeAreaView>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeAreaView>
  );
};

export default RestaurantDetailScreen;
