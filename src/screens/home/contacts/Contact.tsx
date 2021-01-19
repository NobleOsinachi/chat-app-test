import React from 'react';
import styled from 'styled-components';

import { UserNonSensitive } from '../../login/dummyApi';
import { Text } from '../../../components';

const ContactContainer = styled.View`
  padding-vertical: ${(props) => props.theme.spacings.s5};
  padding-horizontal: ${(props) => props.theme.spacings.s2};
  flex-direction: row;
  justify-content: space-between;
`;

const ContactName = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colours.secondary};
`;

const ContactOptions = styled.View`
  flex-direction: row;
  width: 30%;
  justify-content: space-between;
`;

const Contact = ({ item }: { item: UserNonSensitive }) => {
  return (
    <ContactContainer>
      <ContactName>{item.displayName}</ContactName>
      <ContactOptions>
        <Text>Chat</Text>
        <Text>Edit</Text>
        <Text>Delete</Text>
      </ContactOptions>
    </ContactContainer>
  );
};

export default Contact;
