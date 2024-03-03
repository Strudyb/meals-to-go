import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from '../components/account/Account.styles';
import { Spacer } from '../components/base';

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />

      <AccountContainer>
        <AuthButton
          icon="login"
          mode="contained"
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </AuthButton>

        <Spacer position="top" size="medium">
          <AuthButton
            icon="account"
            mode="contained"
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};

export default AccountScreen;
