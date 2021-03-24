import axios from 'axios';
import { API_URL } from '../config';

export const createSubCategory = async (authtoken, sub) => {
	return await axios.post(`${API_URL}/admin/sub/create`, sub, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const getSubs = async () => {
	return await axios.get(`${API_URL}/subs`);
};

export const removeSub = async (authtoken, slug) => {
	return await axios.delete(`${API_URL}/admin/sub/delete/${slug}`, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const updateSub = async (authtoken, slug, subName, parentCategory) => {
	return await axios.put(
		`${API_URL}/admin/sub/update/${slug}`,
		{ name: subName, parent: parentCategory },
		{
			headers: {
				authtoken: authtoken
			}
		}
	);
};
