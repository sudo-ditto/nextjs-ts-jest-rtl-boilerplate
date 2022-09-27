import '../assets/styles/globals.css';
import '../assets/styles/scss/main.module.scss';
import { store } from '../store/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
