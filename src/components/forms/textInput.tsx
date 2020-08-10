import React, { memo, useRef, RefObject } from 'react';
import styled from 'styled-components';
import { InputGroup, InputProps } from './inputGroup';

const Field = styled.input`
  font: inherit;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colours.mediumGrey};
  padding: 0.6em 1.4em 0.5em 0.8em;
  margin: 0;
  margin-bottom: 0.2rem;
  resize: vertical;
`;

export const TextInput = memo((props: InputProps) => {
  const renderField = useRef(
    (props: InputProps, ref: RefObject<HTMLInputElement>) => (
      <Field ref={ref} {...props} />
    ),
  ).current;

  return <InputGroup render={renderField} {...props} />;
});
