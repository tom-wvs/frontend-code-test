import React, { forwardRef, memo, FormEvent } from 'react';
import styled from 'styled-components';
import { VerticalLabel } from './label';
import { HelperText } from './helperText';
import { ErrorMessage } from './errorMessage';
import { MandatoryIcon } from './mandatoryIcon';

export interface InputProps {
  id: string;
  label?: string;
  required?: boolean;
  helperText?: string;
  error?: string;
  value?: string;
  checked?: boolean;
  placehholder?: string;
  onChange?(e: FormEvent): any;
}

interface InputGroupProps extends InputProps {
  render(props: any, ref: any): any;
}

export interface MemoLabelProps {
  id: string;
  label?: string;
  required?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledMandatoryIcon = styled(MandatoryIcon)`
  margin-left: 4px;
`;

const MemoLabel = memo((props: MemoLabelProps) => (
  <VerticalLabel htmlFor={props.id} aria-required={props.required}>
    {props.label}
    {props.required && <StyledMandatoryIcon />}
  </VerticalLabel>
));

const MemoHelperText = memo(HelperText);
const MemoErrorMessage = memo(ErrorMessage);

export const InputGroup = memo(
  forwardRef((props: InputGroupProps, ref) => (
    <Container>
      <MemoLabel id={props.id} label={props.label} required={props.required} />
      {props.helperText && <MemoHelperText>{props.helperText}</MemoHelperText>}
      {props.render(props, ref)}
      {props.error && <MemoErrorMessage>{props.error}</MemoErrorMessage>}
    </Container>
  )),
);
