import { View, Text } from 'react-native';
import { SafeArea } from '../components/base';
import { Button } from 'react-native-paper';
import { useContext } from 'react';
import { AuthenticationContext } from '../services/authentication/AuthenticationContext';

const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <Text>SettingsScreen</Text>
      <Button onPress={() => onLogout()}>Log out</Button>
    </SafeArea>
  );
};

export default SettingsScreen;
