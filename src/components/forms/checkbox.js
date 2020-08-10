import React from 'react';
import styled from 'styled-components';
import { Label } from './label';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Field = styled.input`
  margin: 0;
  margin-right: 10px;
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
