import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@style/GlobalStyle';
import theme from '@style/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
