import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { searchReducer } from './searchReducer';
import { userReducer } from './userReducer';
import { wishlistCountReducer } from './wishlistCountReducer';

const rootReducer = combineReducers({
	user: userReducer,
	search: searchReducer,
	filter: filterReducer,
	wishlistCount: wishlistCountReducer
});

export default rootReducer;
