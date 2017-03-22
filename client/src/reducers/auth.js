import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR
} from '../consts/types.js';

const initialState = {};

export default (state=initialState, action) => {
	switch(action.type){
		case AUTH_USER:
			return {...state, authenticated: true}
			break;
		case UNAUTH_USER:
			return {...state, authenticated: false}
			break;
		default:
			return state;
	}
}
