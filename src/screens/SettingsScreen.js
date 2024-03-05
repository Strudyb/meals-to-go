import { SafeArea, Spacer, Text } from '../components/base';
import { List, Avatar } from 'react-native-paper';
import { useContext } from 'react';
import { AuthenticationContext } from '../services/authentication/AuthenticationContext';
import styled from 'styled-components/native';

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space.md};
`;

const AvatarContainer = styled.View`
  margin-top: ${(props) => props.theme.space.md};
  align-items: center;
`;

const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />

        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate('Favourites')}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
          onPress={() => onLogout()}
        />
      </List.Section>
    </SafeArea>
  );
};

export default SettingsScreen;
