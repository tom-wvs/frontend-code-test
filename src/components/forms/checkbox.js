import React from 'react';
import styled from 'styled-components';
import { Label } from './label';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Field = styled.input`
  margin: 3px 10px 0 0;
`;

export const Checkbox = (props) => {
  return (
    <Label htmlFor={props.id}>
      <Container>
        <Field {...props} type="checkbox" />
        {props.labelRender ? props.labelRender() : props.label}
      </Container>
    </Label>
  );
};
