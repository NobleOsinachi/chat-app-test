import React from 'react';
import { ScreenContainer, Text } from '../../components';

interface Props {
  user: {
    displayName: string;
    id: number;
  };
}

const Chat = React.memo((props: Props) => {
  return (
    <ScreenContainer>
      <Text>Chats</Text>
    </ScreenContainer>
  );
});

export default Chat;
