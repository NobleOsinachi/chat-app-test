import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';

import { ScreenContainer, Text, Heading, Button } from '../../../components';
import { UserNonSensitive } from '../../login/dummyApi';
import { getContacts } from './dummyApi';
import Contact from './Contact';

const TitleContainer = styled.View`
  background-color: ${(props) => props.theme.colours.main};
  width: 100%;
  padding-vertical: ${(props) => props.theme.spacings.s2};
  padding-horizontal: ${(props) => props.theme.spacings.s2};
  margin-top: ${(props) => props.theme.spacings.s2};
`;

const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colours.text};
  text-align: left;
`;

const Name = styled(Heading)`
  color: ${(props) => props.theme.colours.light};
`;

const ItemSeparator = styled.View`
  height: 2px;
  width: 90%;
  margin-left: 5%;
  border-bottom-width: 2px;
  border-bottom-color: ${(props) => props.theme.colours.main};
`;

const FooterContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const Footer = () => (
  <FooterContainer>
    <Button onPress={() => {}} content="Add Contact" />
  </FooterContainer>
);

const Contacts = React.memo((props: { user: UserNonSensitive }) => {
  const [contacts, updateContacts] = React.useState([]);
  const { displayName } = props?.user;

  React.useEffect(() => {
    const storeContacts = getContacts(displayName || '');

    if (storeContacts.length) {
      updateContacts(storeContacts);
    }
  }, []);

  return (
    <ScreenContainer>
      {displayName ? (
        <Heading>
          Hello <Name>{displayName}</Name>
        </Heading>
      ) : null}
      <TitleContainer>
        <Title>Your Contacts</Title>
      </TitleContainer>
      {!contacts.length ? null : (
        <FlatList
          data={contacts}
          keyExtractor={(u) => u.id.toString()}
          renderItem={Contact}
          ItemSeparatorComponent={ItemSeparator}
          style={{ width: '100%' }}
          ListFooterComponent={Footer}
        />
      )}
    </ScreenContainer>
  );
});

export default Contacts;
