import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { langReducer } from './langReducer';
import { searchReducer } from './searchReducer';
import { userReducer } from './userReducer';
import { wishlistCountReducer } from './wishlistCountReducer';

const rootReducer = combineReducers({
	user: userReducer,
	search: searchReducer,
	filter: filterReducer,
	wishlistCount: wishlistCountReducer,
	lang: langReducer
});

export default rootReducer;
