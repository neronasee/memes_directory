import { combineReducers } from 'redux';
import auth from './auth';
import filestack from './filestack';
import memes from './memes';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
	auth,
	filestack,
	memes,
	form
});

export default rootReducer
