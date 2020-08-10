import React, { memo } from 'react';
import styled from 'styled-components';
import { Spinner } from '../spinner';

const StyledButton = styled.button`
  align-items: center;
  background: linear-gradient(190deg, #32a2e6, #0e7ad4);
  border-radius: 5px;
  border: 0;
  color: ${(props) => props.color || props.theme.colours.white};
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  font-size: 1rem;
  justify-content: center;
  padding: 10px 20px;
  transition: all 250ms ease;
  width: 100%;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.117647),
    0 1px 4px rgba(0, 0, 0, 0.117647);

  :hover {
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.117647),
      0 3px 6px rgba(0, 0, 0, 0.117647);
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
