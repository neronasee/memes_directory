import { combineReducers } from 'redux';
import auth from '../reducers/auth.js';

const rootReducer = combineReducers({
	auth
});

export default rootReducer
