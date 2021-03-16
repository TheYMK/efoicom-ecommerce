import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LoadingToRedirect from '../LoadingToRedirect';
import { getCurrentReferent } from '../../actions/auth';
import { toast } from 'react-toastify';

const ReferentProtected = ({ children }) => {
	const { user } = useSelector((state) => ({ ...state }));
	const [ accessGranted, setAccessGranted ] = useState(false);

	useEffect(
		() => {
			if (user && user.token) {
				getCurrentReferent(user.token)
					.then((res) => {
						setAccessGranted(true);
					})
					.catch((err) => {
						console.log('Failed to grant access to admin resource', err);
						// toast.error("Vous n'êtes pas autorisé à acceder à cette section de la platforme");
						setAccessGranted(false);
					});
			}
		},
		[ user ]
	);

	return accessGranted ? (
		<React.Fragment>{children}</React.Fragment>
	) : (
		<React.Fragment>
			<LoadingToRedirect />
		</React.Fragment>
	);
};

export default ReferentProtected;
