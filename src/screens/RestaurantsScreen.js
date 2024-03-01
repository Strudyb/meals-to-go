import { useContext } from 'react';
import { FlatList, Platform, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';
import { Spacer, SafeArea } from '../components/base';
import RestaurantInfoCard from '../components/restaurant/RestaurantInfoCard';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { RestaurantsContext } from '../services/restaurants/restaurants.context';
import { ActivityIndicator } from 'react-native-paper';
import RestaurantSearch from '../components/restaurant/RestaurantSearch';

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
  const tabBarHeight = useBottomTabBarHeight();

  const { isLoading, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <RestaurantSearch />

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
