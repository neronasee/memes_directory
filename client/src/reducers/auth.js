import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR
} from '../consts/types.js';

const initialState = {};

export default (state=initialState, action) => {
	switch(action.type){
		case AUTH_USER:
			return {...state, error: '', authenticated: true, username: action.payload}
		case UNAUTH_USER:
			return {...state, authenticated: false, username: ''}
		case AUTH_ERROR:
			return {...state, error: action.payload}
		default:
			return state;
	}
}
