import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: ${theme.colors.color};
    background-color: ${theme.colors.bgColor};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }
`}
`;

export default GlobalStyle;
