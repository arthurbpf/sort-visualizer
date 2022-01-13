import globalCss from '../styles/globals'
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component className={globalCss} {...pageProps} />;
}

export default MyApp;
