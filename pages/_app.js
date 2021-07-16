// import 'antd/dist/antd.css';
import '../node_modules/react-quill/dist/quill.snow.css';
import NProgress from 'nprogress';
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-number-input/style.css';
import '../styles/globals.css';
import Router from 'next/router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

Router.onRouteChangeStart = (url) => {
	NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

// redux store
const store = createStore(rootReducer, composeWithDevTools());

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			{/* <div id="preloader2" /> */}
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
