import axios from 'axios';
import { API_URL } from '../config';

export const createBlog = async (blog, authtoken) => {
	let endpoint = `${API_URL}/admin/blog`;

	return await axios.post(endpoint, blog, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const getBlogs = async () => {
	return await axios.get(`${API_URL}/blogs`);
};

export const getTotalBlogCount = async () => {
	return await axios.get(`${API_URL}/blogs/total`);
};

export const getBlogsWithCategoriesAndTags = async (skip, limit) => {
	const data = {
		limit,
		skip
	};

	return await axios.post(`${API_URL}/blogs-categories-tags`, data);
};

export const getSingleBlog = async (slug) => {
	return await axios.get(`${API_URL}/blog/${slug}`);
};

export const removeBlog = async (slug, authtoken) => {
	let endpoint = `${API_URL}/admin/blog/${slug}`;

	return await axios.delete(endpoint, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const updateBlog = async (slug, blog, authtoken) => {
	return await axios.put(`${API_URL}/admin/blog/${slug}`, blog, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const getRelatedBlogs = async (blog) => {
	return await axios.post(`${API_URL}/blog/related`, { blog });
};
