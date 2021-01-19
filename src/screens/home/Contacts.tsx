import React from 'react';
import { ScreenContainer, Text } from '../../components';
import styled from 'styled-components';

const Welcome = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  color: ${(props) => props.theme.colours.text};
`;

const Name = styled(Welcome)`
  color: ${(props) => props.theme.colours.light};
`;

interface Props {
  user: {
    displayName: string;
    id: number;
  };
}

const Contacts = React.memo((props: Props) => {
  const { displayName } = props?.user;

  return (
    <ScreenContainer>
      {displayName ? (
        <Welcome>
          Hello <Name>{displayName}</Name>
        </Welcome>
      ) : null}
      <Text>Contacts</Text>
    </ScreenContainer>
  );
});

export default Contacts;
