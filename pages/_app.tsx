import '../styles/global.css';
import { AppProps } from 'next/app';
import { Manrope, Sora } from 'next/font/google';
import Head from 'next/head';

const headingFont = Sora({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const bodyFont = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
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
      <title>Rohan Dey, software developer</title>
    </Head>
    <div className={`${headingFont.variable} ${bodyFont.variable}`}>
      <Component {...pageProps} />
    </div>
  </>
}
