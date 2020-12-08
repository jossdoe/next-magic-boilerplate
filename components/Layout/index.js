import Head from 'next/head';

import Header from '@components/Header';

import { Container, Footer } from './style';

const Layout = (props) => (
  <>
    <Head>
      <title>Magic</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main>
      <Container>{props.children}</Container>
    </main>

    <Footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/vercel.svg" alt="Vercel Logo" />
      </a>
    </Footer>
  </>
);

export default Layout;
