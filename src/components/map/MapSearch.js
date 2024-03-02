import { useContext, useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { LocationContext } from '../../services/location/location.context';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space.md};
  position: absolute;
  z-index: 999;
  top: 30px;
  width: 100%;
`;

const MapSearch = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchQuery}
        icon="map"
        onSubmitEditing={() => {
          search(searchQuery);
        }}
        onChangeText={setSearchQuery}
        mode="bar"
      />
    </SearchContainer>
  );
};

export default MapSearch;
