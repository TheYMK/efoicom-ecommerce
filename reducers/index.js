import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { wishlistCountReducer } from './wishlistCountReducer';

const rootReducer = combineReducers({
	user: userReducer,
	wishlistCount: wishlistCountReducer
});

export default rootReducer;
