import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components';

const Container = styled.SafeAreaView`
  background-color: ${(props) => props.theme.colours.background};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface Props {
  children: React.ReactNode;
}
const ScreenContainer = ({ children }: Props) => {
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      {children}
    </Container>
  );
};

export default ScreenContainer;
