import { useContext, useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { LocationContext } from '../../services/location/location.context';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space.md};
`;

const RestaurantSearch = ({ isFavouritesToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon={isFavouritesToggled ? 'heart' : 'heart-outline'}
        value={searchQuery}
        onSubmitEditing={() => {
          search(searchQuery);
        }}
        onIconPress={onFavouritesToggle}
        onChangeText={setSearchQuery}
        mode="bar"
      />
    </SearchContainer>
  );
};

export default RestaurantSearch;
