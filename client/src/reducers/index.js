import { combineReducers } from 'redux';
import auth from './auth';
import filestack from './filestack';
import memes from './memes';
import singleMem from './singleMem';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
	auth,
	filestack,
	memes,
	form,
	singleMem
});

export default rootReducer
