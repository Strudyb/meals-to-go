import { useContext, useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { LocationContext } from '../../services/location/location.context';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space.md};
`;

const RestaurantSearch = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  useEffect(() => {
    search(searchQuery);
  }, []);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchQuery}
        onSubmitEditing={() => {
          search(searchQuery);
        }}
        onChangeText={setSearchQuery}
        mode="bar"
      />
    </SearchContainer>
  );
};

export default RestaurantSearch;
