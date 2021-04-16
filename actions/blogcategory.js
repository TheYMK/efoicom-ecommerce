import axios from 'axios';
import { API_URL } from '../config';

export const createBlogCategory = async (blogcategory, authtoken) => {
	return await axios.post(`${API_URL}/admin/blogcategory`, blogcategory, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const getBlogCategories = async () => {
	return await axios.get(`${API_URL}/blogcategories`);
};

export const removeBlogCategory = async (slug, authtoken) => {
	return await axios.delete(`${API_URL}/admin/blogcategory/${slug}`, {
		headers: {
			authtoken: authtoken
		}
	});
};
