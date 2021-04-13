import { combineReducers } from 'redux';
import { searchReducer } from './searchReducer';
import { userReducer } from './userReducer';
import { wishlistCountReducer } from './wishlistCountReducer';

const rootReducer = combineReducers({
	user: userReducer,
	search: searchReducer,
	wishlistCount: wishlistCountReducer
});

export default rootReducer;
