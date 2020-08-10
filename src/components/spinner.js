import React from 'react';
import styled from 'styled-components';

const Inner = styled.i`
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  width: 1em;
  height: 1em;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 50%;
  border: 2px solid #ccc;
  border-top-color: ${(props) =>
    props.color ? props.color : props.theme.colours.primary};
  animation: spinner 0.6s linear infinite;
`;

export const Spinner = (props) => {
  return <Inner {...props} />;
};
