import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Toolbar from '../components/Toolbar';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Toolbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
