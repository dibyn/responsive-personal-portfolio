import Head from 'next/head';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import styled, { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../GlobalStyle';

const Container = styled.div`
  height: 100vh;
  min-height: 100vh;
`;
const queryClient = new QueryClient();
const theme: DefaultTheme = {
  colors: {
    primary: '#49576a',
    secondary: '#0070f3',
    body: '#fff',
    text: '#525252'
  },
};

const Layout = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>Beer keep</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Get some beer" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>{children}</Container>
      <ReactQueryDevtools initialIsOpen={false} />
    </ThemeProvider>
  </QueryClientProvider>
);
export default Layout;
