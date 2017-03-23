import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR
} from '../consts/types.js';
import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://localhost:3030'

export function signinUser ({ name, password }) {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/signin`, {name, password})
			.then(response => {
				dispatch({
					type: AUTH_USER,
					payload: response.data.user
				})
				localStorage.setItem('token', response.data.token);
				browserHistory.push('/');
			})
			.catch(error => {
				dispatch(authError('Bad Login Info'))
			})
	}
}

export function signupUser({ name, password}) {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/signup`, {name, password})
			.then(response => {
				dispatch({
					type: AUTH_USER,
					payload: response.data.user
				})
				localStorage.setItem('token', response.data.token);
				browserHistory.push('/');
			})
			.catch(error => {
				dispatch(authError(error.response.data.error))
			})
	}
}

export function signoutUser() {
	localStorage.removeItem('token');

	return {
		type: UNAUTH_USER
	}
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	}
}

export function clearError() {
	return {
		type: AUTH_ERROR,
		payload: ""
	}
}
