import React from 'react';
import SInfo from 'react-native-sensitive-info';
import { ScreenContainer, Text } from '../../components';

interface Props {
  navigation: any;
}

const Logout = ({ navigation }: Props) => {
  React.useEffect(() => {
    const logout = async () => {
      await SInfo.setItem('user', '', {});
      navigation.navigate('Login');
    };
    logout();
  }, []);

  return (
    <ScreenContainer>
      <Text>Logging out...</Text>
    </ScreenContainer>
  );
};

export default Logout;
