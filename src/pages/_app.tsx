import '../assets/styles/globals.css';
import '../assets/styles/scss/main.module.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
