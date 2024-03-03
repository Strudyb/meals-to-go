import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthenticationContext } from '../../services/authentication/AuthenticationContext';
import AccountNavigator from './AccountNavigator';
import AppNavigator from './AppNavigator';

const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
