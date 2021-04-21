import axios from 'axios';
import { API_URL } from '../config';

export const createZone = async (authtoken, zone) => {
	return await axios.post(`${API_URL}/admin/zone/create`, zone, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const getAllZones = async () => {
	return await axios.get(`${API_URL}/zones/all`);
};

export const removeZone = async (authtoken, slug) => {
	return await axios.delete(`${API_URL}/zone/${slug}`, {
		headers: {
			authtoken: authtoken
		}
	});
};

export const updateZone = async (authtoken, slug, zone) => {
	return await axios.put(`${API_URL}/zone/${slug}`, zone, {
		headers: {
			authtoken: authtoken
		}
	});
};
