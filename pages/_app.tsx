import '../styles/global.css';
import { AppProps } from 'next/app';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import Head from 'next/head';

const headingFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

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
    <div className={`${headingFont.variable} ${bodyFont.variable}`}>
      <Component {...pageProps} />
    </div>
  </>
}
