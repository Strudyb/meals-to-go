import { useRef } from 'react';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AnimationWrapper,
  AuthButton,
  Title,
} from '../components/account/Account.styles';
import { Spacer } from '../components/base';
import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

const Lottie = styled(LottieView)`
  width: 100%;
  height: 100%;
`;

const AccountScreen = ({ navigation }) => {
  const animation = useRef(null);
  return (
    <AccountBackground>
      <AccountCover />

      <AnimationWrapper>
        <Lottie
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          ref={animation}
          source={require('../../assets/watermelon.json')}
        />
      </AnimationWrapper>

      <Title>Meals To Go</Title>

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
