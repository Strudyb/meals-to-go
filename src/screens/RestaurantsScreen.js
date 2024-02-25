import { useState } from 'react';
import { FlatList, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer, SafeArea } from '../components/base';
import RestaurantInfoCard from '../components/restaurant/RestaurantInfoCard';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space.md};
`;

const RestaurantFlatList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const tabBarHeight = useBottomTabBarHeight();

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

      <RestaurantFlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
        ]}
        renderItem={() => (
          <>
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard />
            </Spacer>
          </>
        )}
        keyExtractor={(item) => item.name}
        style={{
          ...(Platform.OS === 'android' && { marginBottom: tabBarHeight + 80 }),
        }}
      />
    </SafeArea>
  );
};

export default RestaurantScreen;
