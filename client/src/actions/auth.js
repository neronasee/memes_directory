import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR
} from '../consts/types.js';

export const signinUser = () => {
	return {
		type: AUTH_USER
	}
}
export const signoutUser = () => {
	return {
		type: UNAUTH_USER
	}
}
