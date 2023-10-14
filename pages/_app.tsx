import '../styles/global.css';
import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return <div className={inter.className} style={{ backgroundColor: '#0F172A', minHeight: '100vh' }}>
    <Component {...pageProps} />
  </div>
}
