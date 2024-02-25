import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const RestaurantCard = styled(Card)`
  border-radius: ${(props) => props.theme.space.xs};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  border-radius: ${(props) => props.theme.space.xs};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space.md};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space.xs};
  padding-bottom: ${(props) => props.theme.space.xs};
`;

export const OpenStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RestaurantIcon = styled.Image`
  width: 15px;
  height: 15px;
`;
