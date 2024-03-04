import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from '../components/account/Account.styles';
import { Spacer, Text } from '../components/base';
import { useContext, useState } from 'react';
import { AuthenticationContext } from '../services/authentication/AuthenticationContext';

const RegisterScreen = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [repeatedPassword, setRepeatedPassword] = useState(null);

  const { isLoading, error, onRegister } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />

      <Title>Meals To Go</Title>

      <AccountContainer>
        <Spacer position="bottom" size="medium">
          <AuthInput
            label="Email"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
        </Spacer>

        <Spacer position="bottom" size="medium">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(pass) => setPassword(pass)}
          />
        </Spacer>

        <Spacer position="bottom" size="medium">
          <AuthInput
            label="Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(pass) => setRepeatedPassword(pass)}
          />
        </Spacer>

        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error?.message}</Text>
          </ErrorContainer>
        )}

        <AuthButton
          icon="email"
          mode="contained"
          loading={isLoading}
          disabled={isLoading}
          onPress={() => onRegister(email, password, repeatedPassword)}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};

export default RegisterScreen;
