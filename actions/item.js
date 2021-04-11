import axios from 'axios';
import { API_URL } from '../config';

export const createItem = async (authtoken, item) => {
	return await axios.post(`${API_URL}/referent/item/create`, item, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const getItemsCountsForReferent = async (authtoken) => {
	return await axios.get(`${API_URL}/referent/items/get-counts`, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const getItemsCountsByReferent = async (referent_email) => {
	return await axios.post(`${API_URL}/items/get-counts-by-referents`, { referent_email });
};

export const getAllItemsForReferent = async (authtoken, productslimit, productskip, serviceslimit, serviceskip) => {
	const data = {
		productslimit,
		productskip,
		serviceslimit,
		serviceskip
	};
	return await axios.post(`${API_URL}/referent/items/get-all`, data, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const getAllItems = async () => {
	return await axios.get(`${API_URL}/items/get-all`);
};

export const getSingleItem = async (slug) => {
	return await axios.get(`${API_URL}/item/${slug}`);
};

export const updateItem = async (authtoken, slug, item) => {
	return await axios.put(`${API_URL}/item/${slug}`, item, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const removeItem = async (authtoken, slug) => {
	return await axios.delete(`${API_URL}/item/${slug}`, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const getTotalItemsRequests = async (authtoken) => {
	return await axios.get(`${API_URL}/admin/items/requests`, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const updateItemApprovalStatus = async (authtoken, slug, item_approval_status) => {
	return await axios.put(
		`${API_URL}/admin/item/${slug}/update-item-approval-status`,
		{ item_approval_status },
		{
			headers: {
				authtoken: authtoken
			}
		}
	);
};

export const recommendItem = async (authtoken, slug) => {
	return await axios.put(
		`${API_URL}/admin/items/${slug}/recommend/yes`,
		{},
		{
			headers: {
				authtoken: authtoken
			}
		}
	);
};

export const doNotRecommendItem = async (authtoken, slug) => {
	return await axios.put(
		`${API_URL}/admin/items/${slug}/recommend/no`,
		{},
		{
			headers: {
				authtoken: authtoken
			}
		}
	);
};

export const getAllRecommendedItems = async () => {
	return await axios.get(`${API_URL}/items/get-all/recommended`);
};

export const getRelatedItems = async (id) => {
	return await axios.get(`${API_URL}/items/related/${id}`);
};

export const getAllProductsByCount = async (count) => {
	return await axios.get(`${API_URL}/items/products/${count}`);
};

export const getAllServicesByCount = async (count) => {
	return await axios.get(`${API_URL}/items/services/${count}`);
};

export const itemStarRating = async (authtoken, item_id, rating) => {
	return await axios.put(`${API_URL}/item/star/${item_id}`, rating, {
		headers: {
			authtoken: authtoken
		}
	});
};
