import styled from 'styled-components/native';
import { colors } from '../../infrastructure/theme/colors';
import { Button, TextInput } from 'react-native-paper';
import { Text } from '../base';

export const AccountBackground = styled.ImageBackground.attrs({
  source: require('../../../assets/home-bg.jpg'),
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space.lg};
  margin-top: ${(props) => props.theme.space.sm};
  border-radius: ${(props) => props.theme.space.sm};
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space.xs};
  border-radius: ${(props) => props.theme.space.sm};
`;

export const AuthInput = styled(TextInput)`
  width: 200px;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;
export const ErrorContainer = styled.View`
  max-width: 200px;
  align-items: center;
  align-self: center;
  margin-bottom: ${(props) => props.theme.space.sm};
`;
