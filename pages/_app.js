import { ColormodeProvider } from '@context/Colormode';
import GlobalStyle from '@style/GlobalStyle';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ColormodeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ColormodeProvider>
    </>
  );
}
