import axios from 'axios';
import { API_URL } from '../config';

export const createCategory = async (authtoken, category_name, category_images) => {
	return await axios.post(
		`${API_URL}/admin/category/create`,
		{ category_name, category_images },
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

export const updateCategory = async (authtoken, slug, name, images) => {
	return await axios.put(
		`${API_URL}/admin/category/update/${slug}`,
		{ name, images },
		{
			headers: {
				authtoken: authtoken
			}
		}
	);
};

export const getCategorySubs = async (id) => {
	return await axios.get(`${API_URL}/category/${id}/subs`);
};
