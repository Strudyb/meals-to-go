import { Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import styled from 'styled-components/native';
import { Text } from '../base';

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const CompactImage = styled.Image`
  border-radius: 14px;
  width: 120px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 14px;
  width: 120px;
  height: 100px;
`;

const isAndroid = Platform.OS === 'android';

const CompactRestaurantInfo = ({ restaurant, isMapInfo }) => {
  const Image = isAndroid && isMapInfo ? CompactWebView : CompactImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant="caption">{restaurant.name}</Text>
    </Item>
  );
};

export default CompactRestaurantInfo;
