import React from 'react';
import { ScreenContainer, Text } from '../../components';

interface Props {
  navigation: any;
}

const Logout = ({ navigation }: Props) => {
  React.useEffect(() => {
    navigation.navigate('Login');
  }, []);

  return (
    <ScreenContainer>
      <Text>Logging out...</Text>
    </ScreenContainer>
  );
};

export default Logout;
