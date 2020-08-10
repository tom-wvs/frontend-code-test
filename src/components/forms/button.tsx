import React, { memo } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { Spinner } from '../spinner';

const StyledButton = styled.button`
  align-items: center;
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colours.primary};
  border-radius: 5px;
  border: 0;
  color: ${(props) => props.color || props.theme.colours.white};
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  font-size: 1.2rem;
  justify-content: center;
  padding: 10px 20px;
  transition: background-color 250ms ease;
  width: 100%;

  :hover {
    background-color: ${(props) =>
      darken(0.1, props.backgroundColor || props.theme.colours.primary)};
  }

  :disabled {
    background-color: ${(props) => props.theme.colours.mediumGrey};
    cursor: default;
  }
`;

const StyledSpinner = styled(Spinner)`
  margin-left: 10px;
  opacity: 0.5;
`;

export const Button: any = memo((props): any => {
  return (
    <StyledButton
      className={props.className}
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
      color={props.color}
      backgroundColor={props.backgroundColor}
    >
      {!props.loading && props.children}
      {props.loading && <StyledSpinner />}
    </StyledButton>
  );
});
