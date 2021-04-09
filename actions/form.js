import axios from 'axios';
import { API_URL } from '../config';

export const contactReferent = async (data) => {
	return await axios.post(`${API_URL}/contact/referent`, data);
};
