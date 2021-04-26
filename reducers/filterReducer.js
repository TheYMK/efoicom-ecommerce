export const filterReducer = (state = { byCategory: [], bySub: '', byType: 'all', byzone: 'allzones' }, action) => {
	switch (action.type) {
		case 'SET_FILTER':
			return { ...state, ...action.payload }; //payload will contain all user information and then will be available in the global state
		default:
			return state;
	}
};
