import axios from 'axios';
import { API_URL } from '../config';

export const createTag = async (tag, authtoken) => {
	return await axios.post(`${API_URL}/admin/tag`, tag, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const getTags = async () => {
	return await axios.get(`${API_URL}/tags`);
};

export const removeTag = async (slug, authtoken) => {
	return await axios.delete(`${API_URL}/admin/tag/${slug}`, {
		headers: {
			authtoken: authtoken
		}
	});
};
