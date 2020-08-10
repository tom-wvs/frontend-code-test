import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
  color: ${(props) => props.theme.colours.primary};
`;

export const MandatoryIcon = (props) => (
  <StyledSpan className={props.className}>*</StyledSpan>
);
