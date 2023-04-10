import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 22px;
  font-weight: 900;
  
  color: ${({ theme }) => theme.font.color.secondary};
`;

export const H2 = styled.h2`
  font-size: 18px;
  font-weight: 700;

  color: ${({ theme }) => theme.font.color.danger};
`;
