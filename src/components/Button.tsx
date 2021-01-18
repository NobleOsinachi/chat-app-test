import React from 'react';
import styled from 'styled-components';

const Touchable = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colours.cta};
  width: 150px;
  padding-horizontal: ${(props) => props.theme.spacings.s4};
  padding-vertical: ${(props) => props.theme.spacings.s3};
  border-radius: ${(props) => props.theme.spacings.s3};
`;

const ButtonText = styled.Text`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colours.text};
`;

interface Props {
  content: string;
  onPress: () => void;
}

const Button = React.memo(({ content, onPress }: Props) => {
  return (
    <Touchable onPress={onPress}>
      <ButtonText>{content}</ButtonText>
    </Touchable>
  );
});

export default Button;
