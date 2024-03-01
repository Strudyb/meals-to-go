import { useState, useContext } from 'react';
import { FlatList, Platform, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer, SafeArea } from '../components/base';
import RestaurantInfoCard from '../components/restaurant/RestaurantInfoCard';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { RestaurantsContext } from '../services/restaurants/restaurants.context';
import { ActivityIndicator } from 'react-native-paper';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space.md};
`;

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

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const tabBarHeight = useBottomTabBarHeight();

  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          mode="bar"
        />
      </SearchContainer>

      {isLoading && (
        <LoadingView>
          <ActivityIndicator animating={isLoading} color="tomato" />
        </LoadingView>
      )}

      {!isLoading && (
        <RestaurantFlatList
          data={restaurants}
          renderItem={({ item }) => (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
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
