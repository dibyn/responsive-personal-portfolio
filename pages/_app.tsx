import { AppProps } from 'next/app';
// import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
