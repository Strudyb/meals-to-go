import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${({ hasMargin = true }) =>
    hasMargin && StatusBar.currentHeight ? `${StatusBar.currentHeight}px` : 0};
  background-color: ${(props) => props.theme.colors.bg.primary}
`;
