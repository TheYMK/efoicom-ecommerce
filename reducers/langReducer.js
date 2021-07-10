export const langReducer = (state = 'fr', action) => {
	switch (action.type) {
		case 'SET_LANG':
			return action.payload; //payload will contain all user information and then will be available in the global state
		default:
			return state;
	}
};
