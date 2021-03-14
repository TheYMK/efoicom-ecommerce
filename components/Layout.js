import React, { useEffect } from 'react';
import Footer from './footer/Footer';
import { ToastContainer } from 'react-toastify';
import { auth } from '../actions/firebase';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../actions/auth';

const Layout = ({ children }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async (user) => {
			if (user) {
				const idTokenResult = await user.getIdTokenResult();

				getCurrentUser(idTokenResult.token)
					.then((response) => {
						dispatch({
							type: 'LOGGED_IN_USER',
							payload: {
								name: response.data.name,
								email: response.data.email,
								token: idTokenResult.token,
								role: response.data.role,
								_id: response.data._id
							}
						});
					})
					.catch((err) => console.log(err));
			}
		});

		// cleanup
		return () => unsubscribe();
	}, []);

	return (
		<React.Fragment>
			<ToastContainer autoClose={10000} />
			{children}
			<Footer />
		</React.Fragment>
	);
};

export default Layout;
