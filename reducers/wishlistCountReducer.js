export const wishlistCountReducer = (state = 0, action) => {
	switch (action.type) {
		case 'SET_COUNT':
			return action.payload; //payload will contain all user information and then will be available in the global state
		default:
			return state;
	}
};
