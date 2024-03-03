import { Text } from 'react-native';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  Title,
} from '../components/account/Account.styles';

const RegisterScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />

      <Title>Meals To Go</Title>

      <AccountContainer>
        <Text>RegisterScreen</Text>
      </AccountContainer>
    </AccountBackground>
  );
};

export default RegisterScreen;
