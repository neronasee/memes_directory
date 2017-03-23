import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthFormField from '../components/auth/AuthFormField.js';
import { signupUser, clearError } from '../actions/auth.js';

class Signup extends Component {
	componentWillMount() {
		this.props.clearError();
	}

	handleFormSubmit(formValues) {
		this.props.signupUser(formValues);
	}

	renderAlert() {
		if(this.props.errorMessage) {
			return(
				<div className="alert alert-danger">
					<strong>Error!</strong> {this.props.errorMessage}
				</div>
			)
		}
	}

	render(){
		const { handleSubmit } = this.props;

		return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      	<AuthFormField
      		type="text"
      		name="name"
      		label="Name"
      	/>
      	<AuthFormField
      		type="password"
      		name="password"
      		label="Password"
      	/>
      	<AuthFormField
      		type="password"
      		name="passwordConfirm"
      		label="Password Confirm"
      	/>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign up!</button>
      </form>
		)
	}
}

const validate = formProps => {
	const errors = {};

	if(!formProps.name) {
		errors.name = 'Please enter the name'
	}

	if(!formProps.password) {
		errors.password = 'Please enter the password'
	}

	if(!formProps.passwordConfirm) {
		errors.passwordConfirm = 'Please enter a password confirmation'
	}

	if(formProps.password !== formProps.passwordConfirm) {
		errors.password = 'Passwords must match'
	}

	return errors;
}

const mapStateToProps = state => {
	return { errorMessage: state.auth.error }
}

const mapDispatchToProps = dispatch =>{
	return(
		bindActionCreators({signupUser, clearError}, dispatch)
	)
}
Signup = reduxForm({
	form: 'signup',
	validate
})(Signup);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

