import axios from 'axios';
import { API_URL } from '../config';

export const getCounts = async (authtoken) => {
	return await axios.get(`${API_URL}/admin/get-counts`, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const getTotalRefRequests = async (authtoken) => {
	return await axios.get(`${API_URL}/admin/referents/requests`, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const updateReferentAccountApprovalStatus = async (authtoken, email, approval_status) => {
	return await axios.put(
		`${API_URL}/admin/referent/update-account-approval-status`,
		{ email, approval_status },
		{
			headers: {
				authtoken: authtoken
			}
		}
	);
};

export const getAllReferents = async (authtoken) => {
	return await axios.get(`${API_URL}/admin/referents/all-approved`, {
		headers: {
			authtoken: authtoken
		}
	});
};
