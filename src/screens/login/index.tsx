import React from 'react';
import styled from 'styled-components';
import { ScreenContainer, Text, Heading, Button } from '../../components';
import theme from '../theme';
import { logIn } from './dummyApi';

const TextContainer = styled.View`
  width: 80%;
  margin-bottom: ${(props) => props.theme.spacings.s4};
`;

const TextInput = styled.TextInput`
  font-size: ${(props) => props.theme.fontSizes.large};
  padding-horizontal: ${(props) => props.theme.spacings.s4};
  padding-vertical: ${(props) => props.theme.spacings.s3};
  background-color: ${(props) => props.theme.colours.main};
  border-radius: ${(props) => props.theme.spacings.s3};
  color: ${(props) => props.theme.colours.text};
`;

const ErrorText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.medium};
  text-align: center;
  color: ${(props) => props.theme.colours.error};
  padding-vertical: ${(props) => props.theme.spacings.s3};
`;

interface Props {
  navigation: any;
}

const Home = ({ navigation }: Props) => {
  const [email, updateEmail] = React.useState('');
  const [password, updatePassword] = React.useState('');
  const [errMsg, updateErrMsg] = React.useState('');

  const changeEmail = React.useCallback(
    (text) => {
      updateEmail(text);
      updateErrMsg('');
    },
    [updateEmail, updateErrMsg],
  );
  const changePassword = React.useCallback(
    (text) => {
      updatePassword(text);
      updateErrMsg('');
    },
    [updatePassword, updateErrMsg],
  );

  const submit = React.useCallback(() => {
    if (!email) {
      updateErrMsg('Please enter your email address');
      return;
    }

    if (!password) {
      updateErrMsg('Please enter your password');
      return;
    }

    const { err, user } = logIn({ email, password });

    if (err) {
      updateErrMsg(err);
      return;
    }

    console.log(user);
    // TODO: navigate to home screen/contacts
  }, [updateErrMsg, email, password]);

  return (
    <ScreenContainer>
      <Heading>Chat Machine</Heading>
      <TextContainer>
        <Text>Email:</Text>
        <TextInput
          placeholder="Email..."
          autoCapitalize="none"
          onChangeText={changeEmail}
          textContentType="emailAddress"
        />
      </TextContainer>
      <TextContainer>
        <Text>Password:</Text>
        <TextInput
          autoCapitalize="none"
          placeholder="Password..."
          onChangeText={changePassword}
          textContentType="password"
          secureTextEntry
        />
      </TextContainer>
      <Button onPress={submit} content="Submit" />
      {errMsg ? <ErrorText>{errMsg}</ErrorText> : null}
    </ScreenContainer>
  );
};
export default Home;
