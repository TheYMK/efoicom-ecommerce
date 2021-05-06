import axios from 'axios';
import { API_URL } from '../config';

export const getCounts = async (authtoken) => {
	return await axios.get(`${API_URL}/get-counts`);
};

export const getTotalRefRequests = async (authtoken) => {
	return await axios.get(`${API_URL}/admin/referents/requests`, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const updateReferentAccountApprovalStatus = async (authtoken, referent_email, approval_status) => {
	return await axios.put(
		`${API_URL}/admin/referent/update-account-approval-status`,
		{ referent_email, approval_status },
		{
			headers: {
				authtoken: authtoken
			}
		}
	);
};

export const getAllReferents = async () => {
	return await axios.get(`${API_URL}/referents/all-approved`);
};

export const deleteReferentUser = async (authtoken, id, referent_email) => {
	return await axios.put(
		`${API_URL}/admin/referent/${id}`,
		{ referent_email },
		{
			headers: {
				authtoken: authtoken
			}
		}
	);
};

export const updateAdminUserAccount = async (authtoken, name, email) => {
	return await axios.put(
		`${API_URL}/admin/account-update`,
		{ newName: name, newEmail: email },
		{
			headers: {
				authtoken: authtoken
			}
		}
	);
};

export const updateAdminPassword = async (authtoken, newPassword) => {
	return await axios.put(
		`${API_URL}/admin/password-update`,
		{ newPassword },
		{
			headers: {
				authtoken: authtoken
			}
		}
	);
};

export const getSingleReferentByEmail = async (email) => {
	return await axios.get(`${API_URL}/referent/${email}`);
};

export const addItemToWishlist = async (authtoken, item_id) => {
	return await axios.post(
		`${API_URL}/wishlist/add`,
		{ item_id },
		{
			headers: {
				authtoken: authtoken
			}
		}
	);
};

export const getUserWishlist = async (authtoken) => {
	return await axios.get(`${API_URL}/user/wishlist/get`, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const removeFromWishlist = async (authtoken, id) => {
	return await axios.put(
		`${API_URL}/user/wishlist/remove/${id}`,
		{},
		{
			headers: {
				authtoken: authtoken
			}
		}
	);
};

export const getUserWishlistCount = async (authtoken) => {
	return await axios.get(`${API_URL}/user/wishlist/count`, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const getAllCustomers = async () => {
	return await axios.get(`${API_URL}/customer/all`);
};

export const fetchReferentsByFilter = async (arg) => {
	return await axios.post(`${API_URL}/referent/search/filters`, arg);
};
