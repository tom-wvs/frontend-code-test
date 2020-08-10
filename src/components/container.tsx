import styled from 'styled-components';

const Outer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <Outer>
    <Inner>{children}</Inner>
  </Outer>
);
