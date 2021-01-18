import React from 'react';
import styled from 'styled-components';

const Heading = styled.Text`
  color: ${(props) => props.theme.colours.text};
  font-size: ${(props) => props.theme.fontSizes.xlarge};
`;

export default Heading;
