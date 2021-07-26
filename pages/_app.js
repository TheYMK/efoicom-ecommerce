// import 'antd/dist/antd.css';
import '../node_modules/react-quill/dist/quill.snow.css';
import NProgress from 'nprogress';
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-number-input/style.css';
import '../styles/globals.css';
import Router from 'next/router';
import { useRouter } from 'next/router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import * as ga from '../lib/ga';
import { useEffect } from 'react';

Router.onRouteChangeStart = (url) => {
	NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

// redux store
const store = createStore(rootReducer, composeWithDevTools());

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(
		() => {
			const handleRouteChange = (url) => {
				ga.pageview(url);
			};
			//When the component is mounted, subscribe to router changes
			//and log those page views
			router.events.on('routeChangeComplete', handleRouteChange);

			// If the component is unmounted, unsubscribe
			// from the event with the `off` method
			return () => {
				router.events.off('routeChangeComplete', handleRouteChange);
			};
		},
		[ router.events ]
	);

	return (
		<Provider store={store}>
			{/* <div id="preloader2" /> */}
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
