import axios from 'axios';
import { API_URL } from '../config';

export const createCategory = async (authtoken, category_name) => {
	return await axios.post(
		`${API_URL}/admin/category/create`,
		{ category_name },
		{
			headers: {
				authtoken: authtoken
			}
		}
	);
};

export const getCategories = async () => {
	return await axios.get(`${API_URL}/categories`);
};

export const removeCategory = async (authtoken, slug) => {
	return await axios.delete(`${API_URL}/admin/category/delete/${slug}`, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const updateCategory = async (authtoken, slug, name) => {
	return await axios.put(
		`${API_URL}/admin/category/update/${slug}`,
		{ name },
		{
			headers: {
				authtoken: authtoken
			}
		}
	);
};
