import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    height: 100px;
    border-top: 1px solid ${theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Container = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  padding: 2rem 1.25rem;
`;
