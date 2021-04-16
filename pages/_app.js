// import 'antd/dist/antd.css';
import '../node_modules/react-quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-number-input/style.css';
import '../styles/globals.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

// redux store
const store = createStore(rootReducer, composeWithDevTools());

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
