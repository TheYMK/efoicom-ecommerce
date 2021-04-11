import axios from 'axios';
import { API_URL } from '../config';

export const createOrUpdateUser = async (authtoken, userInfo) => {
	return await axios.post(`${API_URL}/create-or-update-user`, userInfo, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const getCurrentUser = async (authtoken) => {
	return await axios.post(
		`${API_URL}/current-user`,
		{},
		{
			headers: {
				authtoken: authtoken
			}
		}
	);
};

export const getCurrentAdmin = async (authtoken) => {
	return await axios.post(
		`${API_URL}/current-admin`,
		{},
		{
			headers: {
				authtoken: authtoken
			}
		}
	);
};

export const getCurrentReferent = async (authtoken) => {
	return await axios.post(
		`${API_URL}/current-referent`,
		{},
		{
			headers: {
				authtoken: authtoken
			}
		}
	);
};

export const getCurrentCustomer = async (authtoken) => {
	return await axios.post(
		`${API_URL}/current-customer`,
		{},
		{
			headers: {
				authtoken: authtoken
			}
		}
	);
};
