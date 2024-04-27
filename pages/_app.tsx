import '../styles/global.css';
import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Rohan Dey's Personal Portfolio"
      />
      <title>Rohan Dey</title>
    </Head>
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  </>
}
