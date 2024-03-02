import { useContext, useState } from 'react';
import { FlatList, Platform, TouchableOpacity } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';
import { SafeArea, Spacer } from '../components/base';
import FavouritesBar from '../components/favourite/FavouritesBar';
import RestaurantInfoCard from '../components/restaurant/RestaurantInfoCard';
import RestaurantSearch from '../components/restaurant/RestaurantSearch';
import { FavouritesContext } from '../services/favourites/FavouritesContext';
import { RestaurantsContext } from '../services/restaurants/restaurants.context';

const LoadingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const RestaurantFlatList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantScreen = ({ navigation }) => {
  const [isFavouritesToggled, setIsFavouritesToggled] = useState(false);

  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);

  const tabBarHeight = useBottomTabBarHeight();

  return (
    <SafeArea>
      <RestaurantSearch
        isFavouritesToggled={isFavouritesToggled}
        onFavouritesToggle={() => setIsFavouritesToggled(!isFavouritesToggled)}
      />

      {isFavouritesToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

      {isLoading && (
        <LoadingView>
          <ActivityIndicator animating={isLoading} color="tomato" />
        </LoadingView>
      )}

      {!isLoading && (
        <RestaurantFlatList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
          style={{
            ...(Platform.OS === 'android' && {
              marginBottom: tabBarHeight,
            }),
          }}
        />
      )}
    </SafeArea>
  );
};

export default RestaurantScreen;
