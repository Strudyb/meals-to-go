import { FlatList, Platform, TouchableOpacity } from 'react-native';
import { SafeArea, Spacer, Text } from '../components/base';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import RestaurantInfoCard from '../components/restaurant/RestaurantInfoCard';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { FavouritesContext } from '../services/favourites/FavouritesContext';
import { useContext } from 'react';

const FavouritesFlatlist = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const NoResultContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-top: ${(props) => props.theme.space.md};
`;

const FavouritesScreen = ({ navigation }) => {
  const tabBarHeight = useBottomTabBarHeight();

  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea hasMargin={false}>
      <FavouritesFlatlist
        data={favourites}
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
    </SafeArea>
  ) : (
    <SafeArea hasMargin={false}>
      <NoResultContainer>
        <Text variant="label">There are no favourites</Text>
      </NoResultContainer>
    </SafeArea>
  );
};

export default FavouritesScreen;
