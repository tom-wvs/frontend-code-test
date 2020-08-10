import styled from 'styled-components';
import { memo } from 'react';

const StyledH2 = styled.h2`
  font-family: 'Merriweather', serif;
  font-weight: 600;
  font-size: 3em;
  text-align: center;
  margin: 0;
  margin: 20px 0;
  color: #333;
`;

export interface LenderHeaderProps {
  children: string;
}

export const LenderHeader = memo(
  ({ children: lenderName }: LenderHeaderProps): JSX.Element => {
    return <StyledH2>{lenderName}</StyledH2>;
  },
);
